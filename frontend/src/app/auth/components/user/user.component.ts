import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";


@Component({
    selector : 'app-user',
    template : './user.component.html',

})
export class UserComponent  {

    userForm : FormGroup<any>;
    errorMessage : string = '';
    successMessage : string = '';

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            username: ["", [Validators.required]],
            password: ["", [Validators.required]],
            email: ["", [Validators.required, Validators.email]],
            role: ["", [Validators.required]],
        });
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            this.authService.createUser(this.userForm.value).subscribe({
                next: (response) => {
                    this.successMessage = "User created";
                    this.userForm.reset();
                },
                error: (error) => {
                    this.errorMessage = error.error ?? "All fields are manadatory";
                }
            });
        }
        else {
            this.errorMessage = "All fields are mandatory";
        }
    }
}