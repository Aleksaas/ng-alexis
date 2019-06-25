import { SortOrder, Severity } from "@app/enums/enum";

export class ApiResponse {
    data: any;
    errors: any;
    isSuccess: boolean;
}

export class ApiError {
    code: number;
    message: string;
    severity: Severity;
    isWarning: boolean;
}

export class SearchOrder {
    orderBy: string;
    orderDirection: string;
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
    pageNumber: number
    entriesCount: number
    result: T[]
}

export class SortData {
    sortColumn = "";
    sortOrder: SortOrder = SortOrder.ASC;

    isReversed() {
        return this.sortOrder == SortOrder.DESC;
    }

    toggleSort() {
        this.sortOrder = this.sortOrder == SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
    }
}
