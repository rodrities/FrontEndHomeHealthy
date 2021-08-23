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
import {timestamp} from 'rxjs/operators';
import {GlobalConstants} from "../../shared/GlobalConstants";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})



export class SessionsComponent implements OnInit, AfterViewInit {

  @ViewChild('sessionForm', {static: false})
  sessionForm: NgForm;
  sessionData: Session;
  dataSource = new MatTableDataSource();
  displayColumns: string[] = ['id', 'endAt', 'startAt', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private today: Date;
  private aux1: Date;
  private aux2: Date;


  constructor(private httpDataService: HttpDataService, private router: Router) {
    this.sessionData = {} as Session;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.retrieveSessionByCustomer(GlobalConstants.USER_ID);
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
}
