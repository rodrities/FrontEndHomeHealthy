import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Routine} from "../../../core/models/routine";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpRoutineService} from "../../../core/services/http-routine.service";
import {GlobalConstants} from "../../shared/GlobalConstants";

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  @ViewChild('sessionForm', {static: false})
  sessionForm: NgForm;
  routineData: Routine;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpRoutineService: HttpRoutineService) {
    this.routineData = {} as Routine;
  }

  ngOnInit(): void{
    this.retrieveSessionByCustomer(GlobalConstants.USER_ID);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  clickRoutine(id: number): void {
    console.log('routine');
    console.log(id);
  }

  retrieveSessionByCustomer(id): void {
    this.httpRoutineService.getRoutinesByCustomerId(id)
      .subscribe((diet: any) => {
        this.dataSource.data = diet.content;
        console.log(this.dataSource.data);
      });
  }
}

