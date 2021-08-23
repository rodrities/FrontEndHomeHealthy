import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Routine} from "../../../core/models/routine";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpRoutineService} from "../../../core/services/http-routine.service";
import {CollaboratorGlobalConstans} from "../../shared/CollaboratorGlobalConstans";

@Component({
  selector: 'app-collaborator-routines',
  templateUrl: './collaborator-routines.component.html',
  styleUrls: ['./collaborator-routines.component.css']
})
export class CollaboratorRoutinesComponent implements OnInit {


  routineData: Routine;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpRoutineService: HttpRoutineService) {
    this.routineData = {} as Routine;
  }

  ngOnInit(): void{
    this.retrieveSessionByCollaborator(CollaboratorGlobalConstans.COLLABORATOR_ID);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  clickRoutine(id: number): void {
    console.log('routine');
    console.log(id);
  }

  retrieveSessionByCollaborator(id): void {
    this.httpRoutineService.getRoutinesByCollaboratorId(id)
      .subscribe((diet: any) => {
        this.dataSource.data = diet.content;
        console.log(this.dataSource.data);
      });
  }
}
