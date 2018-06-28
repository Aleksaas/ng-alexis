export class Order {
    orderBy: string;
    sortDirection: string;
}

export class PageableSearchRequest {

    locale: string;
    pageNumber: number;
    pageSize: number;
    query: any;
    orders: Order[];

    constructor() {

        this.pageNumber = 1;
        this.pageSize = 10;

        this.query = {};

        const order = new Order();

        this.orders = [];
        this.orders.push(order);

    }
}
