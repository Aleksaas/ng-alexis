export class SearchRequest {

    locale: string;
    pageNumber: number;
    pageSize: number;
    query: any;
    orders: SearchOrder[];

    constructor() {

        this.pageNumber = 1;
        this.pageSize = 10;

        this.query = {};

        const order = new SearchOrder();

        this.orders = [];
        this.orders.push(order);

    }
}

export class SearchResult {

    pageSize?: number
    entriesCount?: number
    totalPages?: number
    currentPage?: number
    result: any
}

export class SearchOrder {
    orderBy?: string | undefined;
    orderDirection?: string | undefined;
}

export class BaseQuery {
    id?: number | undefined;
    locale?: string | undefined;
}
