import {Component, OnInit, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {FormControl} from "@angular/forms";
import {Collaborator} from "../../../core/models/collaborator";
import {CollabotarorSchedule} from "../../../core/models/collabotarorSchedule";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpCollaboratorsDataService} from "../../../core/services/http-collaborators-data.service";
import {HttpCollaboratorScheduleService} from "../../../core/services/http-collaboratorSchedule.service";
import {MatTableDataSource} from "@angular/material/table";
import {CollaboratorGlobalConstans} from "../../shared/CollaboratorGlobalConstans";

@Component({
  selector: 'app-collaborator-profile',
  templateUrl: './collaborator-profile.component.html',
  styleUrls: ['./collaborator-profile.component.css']
})
export class CollaboratorProfileComponent implements OnInit {
  collaborator: Collaborator;
  collaboratorScheduleData: CollabotarorSchedule[];
  selectedSchedule: String;
  dataSource = new MatTableDataSource();
  @ViewChild('picker') picker: any;


  public minDate: Date;
  public maxDate: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'accent';

  public dateControl = new FormControl(new Date());

  constructor(
    private route: ActivatedRoute,
    private httpCollaboratorsDataService: HttpCollaboratorsDataService,
    private httpCollaboratorScheduleService: HttpCollaboratorScheduleService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {

      this.fetchProduct(CollaboratorGlobalConstans.COLLABORATOR_ID);
      this.retrieveScheduleByCollaboratorId(CollaboratorGlobalConstans.COLLABORATOR_ID);
    });
  }

  fetchProduct(id: number) {
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

  addSchedules( id : number, startDate: Date): void {
    const newCollaboratorSchedule = {
      id: 0,
      date: startDate
    };
    this.httpCollaboratorScheduleService.createCollaboratorSchedule(newCollaboratorSchedule, 1).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  onSubmitAdd(id : number): void {
    this.addSchedules(1, this.dateControl.value)
  }

  /*@ViewChild('picker') picker: any;

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: Date;
  public maxDate: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  public dateControl = new FormControl(new Date());

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];

  public codeDatePicker =
    `
<mat-form-field>
  <input matInput [ngxMatDatetimePicker]="picker" placeholder="Choose a date"
                  [formControl]="dateControl" [min]="minDate" [max]="maxDate" [disabled]="disabled">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <ngx-mat-datetime-picker #picker [showSpinners]="showSpinners" [showSeconds]="showSeconds"
    [stepHour]="stepHour" [stepMinute]="stepMinute" [stepSecond]="stepSecond"
    [touchUi]="touchUi" [color]="color">
  </ngx-mat-datetime-picker>
</mat-form-field>`;

  constructor() { }

  ngOnInit() {
  }

  toggleMinDate(evt: any) {
    if (evt.checked) {
      this._setMinDate();
    } else {
      this.minDate = null;
    }
  }

  toggleMaxDate(evt: any) {
    if (evt.checked) {
      this._setMaxDate();
    } else {
      this.maxDate = null;
    }
  }

  closePicker() {
    this.picker.cancel();
  }

  private _setMinDate() {
    const now = new Date();
    this.minDate = new Date();
    this.minDate.setDate(now.getDate() - 1);
  }


  private _setMaxDate() {
    const now = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(now.getDate() + 1);
  }
*/

}
