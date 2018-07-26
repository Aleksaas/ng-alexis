export class CustomerBasic {
    id: number;
    name?: string | undefined;
}

export class CustomerDetails extends CustomerBasic {
    company?: CompanyBasic | undefined;
    shipNumber: number;
}

export class CompanyBasic {
    id: number;
    name?: string | undefined;
}
