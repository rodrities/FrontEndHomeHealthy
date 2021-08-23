import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpDataService} from '../../../core/services/http-session.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Customer } from '../../../core/models/customer';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Session} from '../../../core/models/session';
import {Diet} from '../../../core/models/diet';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-sessions',
  templateUrl: './collaborator-sessions.component.html',
  styleUrls: ['./collaborator-sessions.component.css']
})



export class CollaboratorSessionsComponent implements OnInit, AfterViewInit {

  @ViewChild('sessionForm', {static: false})
  sessionForm: NgForm;
  @ViewChild('dietForm', {static: false})
  dietForm: NgForm;
  sessionData: Session;
  dietData: Diet;
  dataSource = new MatTableDataSource();
  displayColumns: string[] = ['id', 'endAt', 'startAt', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private today: Date;
  private aux1: Date;
  private aux2: Date;


  constructor(private httpDataService: HttpDataService, private router: Router) {
    this.sessionData = {} as Session;
    this.dietData = {} as Diet;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.retrieveSessionByCustomer(1);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  retrieveSessionByCustomer(id): void {
    this.httpDataService.getSession(id)
      .subscribe((session: any) => {
        this.dataSource.data = session.content;
        console.log(this.dataSource.data);
      });
  }

  navigateToDiet(sessionId): void{
    this.router.navigate([`/diets/${sessionId}`]).then(() => null);
  }

  sessionIsActive(d1: Date, d2: Date ): boolean{
    const today = new Date();

    const aux1 = new Date(d1);
    const aux2 = new Date(d2);

    if (aux1 < today  ) {
      if (aux2 > today) {
        return true;
      }
      return false;
    }
    else {
      return false;
    }
  }

  /*addDiet(id): void {
    const newStudent = {
      id: 5,
      name: this.dietData.name,
      description: this.dietData.description,
    };
    this.httpDataService.createDiet(newStudent, id).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }*/

  addSession(Cid, id): void {
    const newStudent = {
      id: 5,
      link: this.sessionData.link,
      startAt: this.sessionData.startAt,
      endAt: this.sessionData.endAt
    };
    this.httpDataService.createSession(newStudent, Cid, id).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }

  /*onSubmit(id): void {
    if (this.dietForm.form.valid) {
      this.addDiet(id);
    } else {
      console.log('Invalid Data');
    }
  }*/

  onSubmit2(Cid, id): void {
    if (this.sessionForm.form.valid) {
      this.addSession(Cid, id);
    } else {
      console.log('Invalid Data');
    }
  }
}
