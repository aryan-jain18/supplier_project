
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
    styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

    warehouseForm: FormGroup;


  constructor(private fb: FormBuilder) {
  
  }
  ngOnInit(): void {
    this.warehouseForm = this.fb.group({
      warehouseId:  [null, Validators.required],
      supplierId: [null, [Validators.required, Validators.min(1)]],
      warehouseName: ['', Validators.required],
      location: ['', Validators.required],
      capacity: [null, [Validators.required, Validators.min(0)]]

    });
  }

   onSubmit() : void{
    
    }
   }

