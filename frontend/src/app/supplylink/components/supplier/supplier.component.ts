import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  supplierForm: FormGroup;
  supplierError$: Observable<string>;
  supplierSuccess$: Observable<string>;

  constructor(private fb: FormBuilder) {
    this.supplierError$ = of('');
    this.supplierSuccess$ = of('');
  }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      supplierName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: [''],
      username: ['', [Validators.required, this.noSpecialCharacters]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', [Validators.required]]
    });
  }

  noSpecialCharacters (controls : AbstractControl) : ValidationErrors | null {
    const patternData = /^[a-zA-Z0-9]+$/;
    if(patternData.test(controls.value)){
      return {invalid : false};
    }
    return {invalid : true};
  }

  onSubmit(): void {
    if (this.supplierForm.valid) {
      const newSupplier = this.supplierForm.value;
      console.log('New Supplier:', newSupplier);
      // Handle form submission, e.g., call a service to save the supplier
      this.supplierSuccess$ = of('Supplier added successfully!');
      this.supplierError$ = of('');
    } else {
      this.supplierError$ = of('Form is invalid. Please fix the errors and try again.');
      this.supplierSuccess$ = of('');
    }
  }
}