export class SearchRequest<T> {

    locale: string;
    pageNumber: number;
    pageSize: number;
    query: T;
    orders: SearchOrder[];

    constructor() {

        this.pageNumber = 1;
        this.pageSize = 10;

        this.query = {} as T;

        const order = new SearchOrder();

        this.orders = [];
        this.orders.push(order);

    }
}

export class SearchResult<T> {

    pageSize?: number
    entriesCount?: number
    totalPages?: number
    currentPage?: number
    result: T[]
}

export class SearchOrder {
    orderBy?: string | undefined;
    orderDirection?: string | undefined;
}

export class BaseQuery {
    id?: number | undefined;
    locale?: string | undefined;
}
