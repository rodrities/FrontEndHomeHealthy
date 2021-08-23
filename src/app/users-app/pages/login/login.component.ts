import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from "../../../core/models/customer";
import {HttpCustomersService} from "../../../core/services/http-customers.service";
import {Router} from "@angular/router";
import {GlobalConstants} from "../../shared/GlobalConstants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customersData: Customer[];
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private httpCustomersService: HttpCustomersService, private router: Router){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      console.log("invalid");
      return;
    }
    this.fetchAllCustomers();
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  fetchAllCustomers(): void {
    this.httpCustomersService.getAllCustomers()
      .subscribe((response: any) => {
        this.customersData = response.content;console.log(this.customersData);
        for (let user of this.customersData) {
          if (this.loginForm.value.email === user.email && this.loginForm.value.password === user.password) {
            GlobalConstants.USER_ID = user.id;
            console.log(GlobalConstants.USER_ID);
            this.navigateToHome();
          }
          }
      });
  }
}
