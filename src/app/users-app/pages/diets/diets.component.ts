import {Component, OnInit, ViewChild} from '@angular/core';
import { Diet } from '../../../core/models/diet';
import {HttpDietService} from '../../../core/services/http-diet.service';
import {Session} from '../../../core/models/session';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {GlobalConstants} from "../../shared/GlobalConstants";

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsComponent implements OnInit {
  @ViewChild('sessionForm', {static: false})
  sessionForm: NgForm;
  dietData: Diet;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpDietService: HttpDietService) {
    this.dietData = {} as Diet;
  }

  ngOnInit(): void{
    this.retrieveSessionByCustomer(GlobalConstants.USER_ID);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  clickDiet(id: number): void {
    console.log('diet');
    console.log(id);
  }


  retrieveSessionByCustomer(id): void {
    this.httpDietService.getDietsByCustomerId(id)
      .subscribe((diet: any) => {
        this.dataSource.data = diet.content;
        console.log(this.dataSource.data);
      });
  }
}
