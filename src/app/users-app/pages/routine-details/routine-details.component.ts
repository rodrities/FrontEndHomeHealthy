import { Component, OnInit } from '@angular/core';
import {Routine} from "../../../core/models/routine";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpRoutineService} from "../../../core/services/http-routine.service";

@Component({
  selector: 'app-routine-details',
  templateUrl: './routine-details.component.html',
  styleUrls: ['./routine-details.component.css']
})
export class RoutineDetailsComponent implements OnInit {

  routine: Routine;

  constructor(
    private route: ActivatedRoute,
    private httpRoutineService: HttpRoutineService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.httpRoutineService.getRoutine(id)
      .subscribe(routine => {
        this.routine = routine;
      });
  }

  ClickExerciseEx(e): void {
    if (!e) var e : any= window.event;                // Get the window event
    e.cancelBubble = true;                       // IE Stop propagation
    if (e.stopPropagation) e.stopPropagation();  // Other Broswers
    console.log('td clicked');
  }
}
