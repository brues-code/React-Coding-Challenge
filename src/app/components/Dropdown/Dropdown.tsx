import React, { FC, ReactNode, useMemo } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

type ValueType = string | number | undefined;

interface MenuOption {
    value: ValueType;
    label: ReactNode;
}

interface OwnProps {
    label?: ReactNode;
    placeholder?: string;
    selectedOption: ValueType;
    options: MenuOption[];
    onChange: (newValue: ValueType) => void;
}

const Dropdown: FC<OwnProps> = ({ label, selectedOption, options, onChange, placeholder }) => {
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
            <Select
                labelId={label ? 'select-filled-label' : undefined}
                id="select-filled"
                value={selectedOption}
                onChange={e => onChange(e.target.value as ValueType)}
            >
                {placeholder && (
                    <MenuItem value="" disabled>
                        {placeholder}
                    </MenuItem>
                )}
                {renderItems}
            </Select>
        ),
        [selectedOption, placeholder, renderItems, label, onChange]
    );

    const renderLabel = useMemo(() => label && <InputLabel id="select-filled-label">{label}</InputLabel>, [label]);

    return (
        <FormControl variant="filled">
            {renderLabel}
            {renderSelect}
        </FormControl>
    );
};

export default Dropdown;
