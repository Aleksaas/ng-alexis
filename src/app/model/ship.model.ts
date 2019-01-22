import { BaseCommand } from "@app/model/common.model";
import { BaseQuery } from "@app/model/search.model";
import { CustomerBasic, CompanyBasic } from "@app/model/customer.model";

export class ShipBasic {
    id: number;
    name: string;
    imd: number;
    mmsi: number;
}

export class ShipDetails extends ShipBasic {
    customer: CustomerBasic;
    company: CompanyBasic;
    criticalEquipmentsNum: number;
}

export class ShipMonthReport extends ShipBasic {
    newEquipmentNum: number;
    updatedEquipmentNum: number;
}

export class ShipQuery extends BaseQuery {
    name: string;
    imd: number;
    mmsi: number;
    monthReportDate: Date;
}

export class ShipCommand extends BaseCommand {
    name: string;
    date: Date;
    imd: number;
    mmsi: number;
    customerId: number;
}
