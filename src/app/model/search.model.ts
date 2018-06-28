export class SearchSort {
    orders: Order[];
}

export class Order {
    orderBy: string;
    sortDirection: string;
}

export class PageSelection {
    pageNumber: number;
    pageSize: number;
}

export class PageableSearchRequest {

    locale: string;
    pageSelection: PageSelection;
    query: any;
    order: Order;
    searchSort: SearchSort;

    constructor() {

        this.pageSelection = new PageSelection();
        this.pageSelection.pageNumber = 1;
        this.pageSelection.pageSize = 10;

        this.query = {};

        this.order = new Order();

        this.searchSort = new SearchSort();
        this.searchSort.orders = [];
        this.searchSort.orders.push(this.order);

    }
}
