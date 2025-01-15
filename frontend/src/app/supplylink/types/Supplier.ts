export class Supplier {

    supplierId: number;
    supplierName: string;
    email: string;
    phone: string;
    address: string;
    username:string;
    password: string;
    role?: string;

    constructor(supplierId: number, supplierName: string, email: string, phone: string, address: string, username: string, paasword: string, role?: string){

        this.supplierId = supplierId;
        this.supplierName =supplierName;
        this.email =email;
        this.phone = phone;
        this.address = address;
        this.username = username;
        this.password = this.password;
        this.role = role;

    }

    displayInfo(){
        console.log(`Supplier ID: ${this.supplierId}`);
        console.log(`Supplier name: ${this.supplierName}`)
        console.log(`email: ${this.email}`)
    }
  

   
}





