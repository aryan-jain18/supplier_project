import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

    productForm: FormGroup
   

    constructor(private fb: FormBuilder){
            
    }
    ngOnInit(): void {
        this.productForm = this.fb.group({
            productId: [null, Validators.required],
            warehouseId:[null, [Validators.required, Validators.min(1)]],
            productName: ['', Validators.required],
            productDescription: ['', Validators.required],
            quantity: [null, [Validators.required, Validators.min(0)]],
            price: [null, [Validators.required, Validators.min(1)]]
            
        })    }
 
onSubmit() : void{
    
}

}
