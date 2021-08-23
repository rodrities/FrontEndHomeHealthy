import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Collaborator } from '../../../core/models/collaborator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//import { HttpDataService } from '../../../core/services/http-data.service';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import {HttpCollaboratorsDataService} from '../../../core/services/http-collaborators-data.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit, AfterViewInit {
  @ViewChild('studentForm', { static: false })
  studentForm: NgForm;
  collaboratorData: Collaborator;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'username', 'role', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEditMode = false;

  foods: Food[] = [
    {value: 'role-0', viewValue: 'Trainers'},
    {value: 'role-1', viewValue: 'Nutritionist'}
  ];

  constructor(private httpDataService: HttpCollaboratorsDataService, private router: Router) {
    this.collaboratorData = {} as Collaborator;
  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAllStudents();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllStudents(): void {
    this.httpDataService.getList().subscribe((collaborator: any) => {
      this.dataSource.data = collaborator.content;
      console.log(this.dataSource.data);
    });
  }
  cancelEdit(): void {
    this.isEditMode = false;
    this.studentForm.resetForm();
  }
  navigateToAddStudent(): void {
    this.router.navigate(['/collaborators/new']).then(() => null);
  }
  navigateToEditStudent(studentId): void {
    this.router.navigate([`/collaborators/${studentId}`]).then(() => null);
  }
  refresh(): void {
    console.log('about to reload');
    this.getAllStudents();
  }
}
