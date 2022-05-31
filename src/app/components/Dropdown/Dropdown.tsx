import React, { FC, ReactNode, useMemo } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectProps } from '@material-ui/core';

type ValueType = string | number | undefined;

interface MenuOption {
    value: ValueType;
    label: ReactNode;
}

interface OwnProps extends SelectProps {
    label?: ReactNode;
    selectedOption: ValueType;
    options: MenuOption[];
}

const Dropdown: FC<OwnProps> = ({ label, selectedOption, options, placeholder, ...restProps }) => {
    const renderItems = useMemo(
        () =>
            options.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                    {label}
                </MenuItem>
            )),
        [options]
    );

    const renderSelect = useMemo(
        () => (
            <Select labelId={label ? 'select-filled-label' : undefined} value={selectedOption} {...restProps}>
                {placeholder && (
                    <MenuItem value="" disabled>
                        {placeholder}
                    </MenuItem>
                )}
                {renderItems}
            </Select>
        ),
        [selectedOption, placeholder, renderItems, label, restProps]
    );

    const renderLabel = useMemo(() => label && <InputLabel id="select-filled-label">{label}</InputLabel>, [label]);

    return (
        <FormControl>
            {renderLabel}
            {renderSelect}
        </FormControl>
    );
};

export default Dropdown;
