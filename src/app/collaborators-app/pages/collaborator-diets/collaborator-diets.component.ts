import {Component, OnInit, ViewChild} from '@angular/core';
import {Diet} from "../../../core/models/diet";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpDietService} from "../../../core/services/http-diet.service";
import {CollaboratorGlobalConstans} from "../../shared/CollaboratorGlobalConstans";

@Component({
  selector: 'app-collaborator-diets',
  templateUrl: './collaborator-diets.component.html',
  styleUrls: ['./collaborator-diets.component.css']
})
export class CollaboratorDietsComponent implements OnInit {

  dietData: Diet[];

  constructor(
    private httpDietService: HttpDietService) {
  }

  ngOnInit(): void{
    this.retrieveSessionByCollaborator(CollaboratorGlobalConstans.COLLABORATOR_ID);
  }

  clickDiet(id: number): void {
    console.log('diet');
    console.log(id);
  }

  retrieveSessionByCollaborator(id): void {
    this.httpDietService.getDietsByCollaboratorId(id)
      .subscribe((response: any) => {
        this.dietData = response.content;
        console.log(this.dietData);
      });
  }

}
