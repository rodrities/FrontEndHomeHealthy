import { Component, OnInit } from '@angular/core';
import {Collaborator} from '../../../core/models/collaborator';
import {CollabotarorSchedule} from "../../../core/models/collabotarorSchedule";
import {HttpCollaboratorsDataService} from '../../../core/services/http-collaborators-data.service';
import {HttpCollaboratorScheduleService} from "../../../core/services/http-collaboratorSchedule.service";
import {HttpDataService} from "../../../core/services/http-session.service";
import {ActivatedRoute, Params} from '@angular/router';
import {Session} from "../../../core/models/session";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-collaborator-profile',
  templateUrl: './user-collaborator-profile.component.html',
  styleUrls: ['./user-collaborator-profile.component.css']
})
export class UserCollaboratorProfileComponent implements OnInit {

  collaborator: Collaborator;
  session: Session;
  collaboratorScheduleData: CollabotarorSchedule[];
  selectedSchedule: String;
  dataSource = new MatTableDataSource();
  collaboratorId : number;
  constructor(
    private route: ActivatedRoute,
    private httpCollaboratorsDataService: HttpCollaboratorsDataService,
    private httpCollaboratorScheduleService: HttpCollaboratorScheduleService,
    private httpDataService: HttpDataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      this.retrieveScheduleByCollaboratorId(id);
      this.collaboratorId = id;
    });
  }

  fetchProduct(id: string) {
    this.httpCollaboratorsDataService.getItem(id)
      .subscribe(collaborator => {
        this.collaborator = collaborator;
      });
  }

  retrieveScheduleByCollaboratorId(id): void {
    this.httpCollaboratorScheduleService.getCollaboratorSchedules(id)
      .subscribe((response: any) => {
        this.collaboratorScheduleData = response.content;
        console.log(this.collaboratorScheduleData);
      });
  }
  onSubmitSchedule(customerId, collaboratorId, startDate): void {
    this.ScheduleSession(customerId, collaboratorId, startDate)
  }
  ScheduleSession(customerId, collaboratorId, scheduleDate): void {
    const startDate = new Date(scheduleDate)
    var endDate = new Date(scheduleDate);
    var scheduleId: number;
    endDate.setHours(endDate.getHours() + 1);
    const session = {
      id: 0,
      startAt: startDate,
      endAt: endDate,
      link: "examplezoom.com"
    };
    console.log(startDate);
    console.log(endDate);

    this.httpDataService.createSession(session, customerId, collaboratorId).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
    for (let schedule of this.collaboratorScheduleData )
    {
      var auxDate = new Date(schedule.date);
      console.log(auxDate);
      if (auxDate.getDate() === startDate.getDate()){
        scheduleId = schedule.id;
      }
    }
    console.log(collaboratorId);
    console.log(scheduleId);
    this.httpCollaboratorScheduleService.deleteCollaboratorSchedule(collaboratorId, scheduleId)
      .subscribe(rta => {
        console.log(rta);
      });
  }
}
