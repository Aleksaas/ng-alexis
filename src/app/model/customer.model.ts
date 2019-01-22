export class CustomerBasic {
    id: number;
    name: string;
}

export class CustomerDetails extends CustomerBasic {
    company: CompanyBasic;
    shipNumber: number;
}

export class CompanyBasic {
    id: number;
    name: string;
}
