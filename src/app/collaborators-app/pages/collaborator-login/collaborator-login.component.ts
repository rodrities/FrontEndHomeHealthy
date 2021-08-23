import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GlobalConstants} from "../../../users-app/shared/GlobalConstants";
import {HttpCollaboratorsDataService} from "../../../core/services/http-collaborators-data.service";
import {Collaborator} from "../../../core/models/collaborator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collaborator-login',
  templateUrl: './collaborator-login.component.html',
  styleUrls: ['./collaborator-login.component.css']
})
export class CollaboratorLoginComponent implements OnInit {

  collaboratorsData: Collaborator[];
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpCollaboratorsDataService: HttpCollaboratorsDataService
            , private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.fetchAllCollaborators();
  }

  navigateToHome(): void {
    this.router.navigate(['/collaborator/home']);

  }

  fetchAllCollaborators(): void {
    this.httpCollaboratorsDataService.getList()
      .subscribe((response: any) => {
        this.collaboratorsData = response.content;console.log(this.collaboratorsData);
        for (let user of this.collaboratorsData) {
          if (this.loginForm.value.email === user.email && this.loginForm.value.password === user.password) {
            GlobalConstants.USER_ID = user.id;
            console.log(GlobalConstants.USER_ID);
            this.navigateToHome();
          }
        }
      });
  }
}
