import { Component, OnInit } from "@angular/core";
import { FormArrayName, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";


@Component({
    selector : 'app-login',
    template : './login.component.html',
})

export class LoginComponent implements OnInit  {

    loginForm : FormGroup;
    errorMessage : string | null = null;

    constructor (private fb : FormBuilder, private authService : AuthService, private router : Router) {
        this.loginForm = fb.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
    }

    ngOnInit(): void {
        
    }
    
    onSubmit(): void {
        if(this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(
                (res) => {
                    localStorage.setItem("token", res.token);
                    localStorage.setItem("role", res.roles);
                    localStorage.setItem("user_id", res.userId);
                },
                (error)  => {
                    this.errorMessage = error;
                }
            )
        }else {
            this.errorMessage = 'Please enter valid username and password';
        }
    }


    
}