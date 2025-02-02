import { Supplier } from "./Supplier";
 
export class Warehouse {
    public warehouseId: number;
    public supplier: Supplier;
    public warehouseName: string;
    public location: string;
    public capacity: number;
 
    constructor(warehouseId: number, supplierId: string, warehouseName: string, location: string, capacity: number) {
    }
 
    public displayInfo(): void {
        console.log(`Warehouse ID: ${this.warehouseId}`);
        console.log(`Supplier ID: ${this.supplier}`);
        console.log(`Capacity: ${this.capacity}`);
        // console.log(`Warehouse Name: ${this.warehouseName}`);
        // console.log(`Location: ${this.location}`);
    }
}