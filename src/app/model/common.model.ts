export class ApiResponse {
    data: any;
    errors: any;
    isSuccess: boolean;
}

export class ApiError {
    code: number;
    message: string;
}

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

export class SearchResponse<T> {

    pageSize: number
    entriesCount: number
    totalPages: number
    currentPage: number
    result: T[]
}

export class SearchOrder {
    orderBy: string;
    orderDirection: string;
}
