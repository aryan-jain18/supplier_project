import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";

@Component ({
    selector : 'app-warehouse',
    template : './warehouse.component.html',
    styleUrls : ['./warehouse.component.scss']
})

export class WarehouseComponent {

  warehouseForm: FormGroup;
  warehouseError$: Observable<string>;
  warehouseSuccess$: Observable<string>;

  constructor(private fb: FormBuilder) {
    this.warehouseError$ = of('');
    this.warehouseSuccess$ = of('');
  }

  ngOnInit(): void {
    this.warehouseForm = this.fb.group({
      supplierId: ['', [Validators.required]],
      warehouseName: ['', Validators.required],
      location : ['', [Validators.required]],
      capacity: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.warehouseForm.valid) {
      const newSupplier = this.warehouseForm.value;
      console.log('New Supplier:', newSupplier);
      // Handle form submission, e.g., call a service to save the supplier
      this.warehouseSuccess$ = of('Supplier added successfully!');
      this.warehouseError$ = of('');
    } else {
      this.warehouseError$ = of('Form is invalid. Please fix the errors and try again.');
      this.warehouseSuccess$ = of('');
    }
  }

}