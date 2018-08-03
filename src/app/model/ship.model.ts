import { BaseCommand } from "@app/model/common.model";
import { BaseQuery } from "@app/model/search.model";
import { CustomerBasic, CompanyBasic } from "@app/model/customer.model";
import { Type } from "class-transformer";

export class ShipBasic {
    id: number;
    name?: string | undefined;
    imd: number;
    mmsi: number;
}

export class ShipDetails extends ShipBasic {
    @Type(() => CustomerBasic)
    customer?: CustomerBasic | undefined;

    @Type(() => CompanyBasic)
    company?: CompanyBasic | undefined;
    criticalEquipmentsNum: number;
}

export class ShipMonthReport extends ShipBasic {
    newEquipmentNum: number;
    updatedEquipmentNum: number;
}

export class ShipQuery extends BaseQuery {
    name?: string | undefined;
    imd?: number | undefined;
    mmsi?: number | undefined;
    monthReportDate: Date;
}

export class ShipCommand extends BaseCommand {
    name?: string | undefined;
    date: Date;
    imd: number;
    mmsi: number;
    customerId: number;
}
