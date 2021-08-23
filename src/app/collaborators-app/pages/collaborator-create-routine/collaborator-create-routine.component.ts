import {Component, OnInit, ViewChild} from '@angular/core';
import {Routine} from "../../../core/models/routine";
import {NgForm} from "@angular/forms";
import {Diet} from "../../../core/models/diet";
import {HttpDietService} from "../../../core/services/http-diet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpRoutineService} from "../../../core/services/http-routine.service";

@Component({
  selector: 'app-collaborator-create-routine',
  templateUrl: './collaborator-create-routine.component.html',
  styleUrls: ['./collaborator-create-routine.component.css']
})
export class CollaboratorCreateRoutineComponent implements OnInit {

  routineData: Routine = new Routine();
  customerId: number;
  @ViewChild('routineForm', {static: false})
  routineForm: NgForm;

  defaultRoutine = { id: 0, name: '',
    firstExerciseMonday: null, secondExerciseMonday: null, thirdExerciseMonday: null, fourthExerciseMonday: null, fifthExerciseMonday: null, sixthExerciseMonday: null,
    firstExerciseTuesday: null, secondExerciseTuesday: null, thirdExerciseTuesday: null, fourthExerciseTuesday: null, fifthExerciseTuesday: null, sixthExerciseTuesday: null,
    firstExerciseWednesday: null, secondExerciseWednesday: null, thirdExerciseWednesday: null, fourthExerciseWednesday: null, fifthExerciseWednesday: null, sixthExerciseWednesday: null,
    firstExerciseThursday: null, secondExerciseThursday: null, thirdExerciseThursday: null, fourthExerciseThursday: null, fifthExerciseThursday: null, sixthExerciseThursday: null,
    firstExerciseFriday: null, secondExerciseFriday: null, thirdExerciseFriday: null, fourthExerciseFriday: null, fifthExerciseFriday: null, sixthExerciseFriday: null,
    firstExerciseSaturday: null, secondExerciseSaturday: null, thirdExerciseSaturday: null, fourthExerciseSaturday: null, fifthExerciseSaturday: null, sixthExerciseSaturday: null,
    firstExerciseSunday: null, secondExerciseSunday: null, thirdExerciseSunday: null, fourthExerciseSunday: null, fifthExerciseSunday: null, sixthExerciseSunday: null};
  constructor(private httpRoutineService: HttpRoutineService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToRoutines(): void {
    this.router.navigate(['/collaborator/routines']);
  }

  addRoutine(): void {
    this.httpRoutineService.createRoutine(this.routineData, 1, this.customerId)
      .subscribe(()=> {
        this.navigateToRoutines();
      });
  }

  onSubmit(): void {
    if(this.routineForm.form.valid) {
      console.log(this.routineData);
      this.addRoutine();
    } else {
      console.log('Invalid Data');
    }
  }
}
