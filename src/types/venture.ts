import { Company } from './company';

export interface Venture {
    id: number;
    name: string;
    companies: Company[];
}
