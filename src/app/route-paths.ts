export const HOME = '/';
export const FUND = '/:fundId';
export const COMPANY = `${FUND}/:companyId`;

type IdType = string | number;

export const generateUrl = (fundId: IdType, companyId?: IdType) => `/${fundId}${companyId ? '/' + companyId : ''}`;
