import { Warehouse } from './Warehouse';
 
export class Product {
  public productId: number;
  public warehouse: Warehouse;
  public productName: string;
  public productDescription: string;
  public quantity: number;
  public price: number;
 
  constructor(productId: number, warehouseId: Warehouse, productName: string, productDescription: string, quantity: number, price: number) {
  }
 
  public displayInfo(): void {
    console.log(`Product ID: ${this.productId}`);
    console.log(`Warehouse: ${this.warehouse}`);
    console.log(`Product name: ${this.productName}`);
    console.log(`Product description: ${this.productDescription}`);
    console.log(`quantity: ${this.quantity}`);
    console.log(`price: ${this.price}`);
  }
}