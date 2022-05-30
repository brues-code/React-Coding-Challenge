import { Company } from './company';

export interface Fund {
    id: number;
    name: string;
    companies: Company[];
}
