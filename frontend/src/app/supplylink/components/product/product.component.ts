import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { Component } from "@angular/core";

@Component ( {
    selector : "app-product",
    template : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})

export class ProductComponent {

  productForm: FormGroup;
  productError$: Observable<string>;
  productSuccess$: Observable<string>;

  constructor(private fb: FormBuilder) {
    this.productError$ = of('');
    this.productSuccess$ = of('');
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      warehouseId: ['', [Validators.required, Validators.min(1)]],
      productName: ['', Validators.required],
      productDescription: [''],
      quantity : [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const newSupplier = this.productForm.value;
      console.log('New Product:', newSupplier);
      // Handle form submission, e.g., call a service to save the supplier
      this.productSuccess$ = of('Product added successfully!');
      this.productError$ = of('');
    } else {
      this.productError$ = of('Form is invalid. Please fix the errors and try again.');
      this.productSuccess$ = of('');
    }
  }

}