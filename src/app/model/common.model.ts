export class ApiResponse<T> {
    data: T;
    errors: any;
    isSuccess: boolean;
}

export class SearchResult {

    pageSize?: number
    entriesCount?: number
    totalPages?: number
    currentPage?: number
    result: any
}
