export const HOME = '/';
export const FUND = '/:fundId';
export const COMPANY = `${FUND}/:companyId`;

type IdType = string | number;

export function generateUrl(fundId: IdType, companyId?: IdType) {
    return `/${fundId}/${companyId ? companyId : ''}`;
}
