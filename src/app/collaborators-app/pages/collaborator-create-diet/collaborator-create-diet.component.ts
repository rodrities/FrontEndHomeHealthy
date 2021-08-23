import {Component, OnInit, ViewChild} from '@angular/core';
import {Diet} from "../../../core/models/diet";
import {NgForm} from "@angular/forms";
import {HttpDietService} from "../../../core/services/http-diet.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-collaborator-create-diet',
  templateUrl: './collaborator-create-diet.component.html',
  styleUrls: ['./collaborator-create-diet.component.css']
})
export class CollaboratorCreateDietComponent implements OnInit {
  @ViewChild('dietForm', {static: false})
  dietForm: NgForm;
  dietData: Diet = new Diet();
  customerId: number;
  defaultDiet = { id: 0, name: '',
    mondayEarlyMorning: null, mondayBreakfast: null, mondayMidMorning: null, mondayLunch: null, mondayMidNoon: null, mondayDinner: null,
    tuesdayEarlyMorning: null, tuesdayBreakfast: null, tuesdayMidMorning: null, tuesdayLunch: null, tuesdayMidNoon: null, tuesdayDinner: null,
    wednesdayEarlyMorning: null, wednesdayBreakfast: null, wednesdayMidMorning: null, wednesdayLunch: null, wednesdayMidNoon: null, wednesdayDinner: null,
    thursdayEarlyMorning: null, thursdayBreakfast: null, thursdayMidMorning: null, thursdayLunch: null, thursdayMidNoon: null, thursdayDinner: null,
    fridayEarlyMorning: null, fridayBreakfast: null, fridayMidMorning: null, fridayLunch: null, fridayMidNoon: null, fridayDinner: null,
    saturdayEarlyMorning: null, saturdayBreakfast: null, saturdayMidMorning: null, saturdayLunch: null, saturdayMidNoon: null, saturdayDinner: null,
    sundayEarlyMorning: null, sundayBreakfast: null, sundayMidMorning: null, sundayLunch: null, sundayMidNoon: null, sundayDinner: null}

  constructor(private httpDietService: HttpDietService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToDiets(): void {
    this.router.navigate(['/collaborator/diets']);
  }

  addDiet(): void {
    /*const newDiet = { name: this.dietData.name,
      mondayEarlyMorning: this.dietData.mondayEarlyMorning, mondayBreakfast: this.dietData.mondayBreakfast, mondayMidMorning: this.dietData.mondayMidMorning, mondayLunch: this.dietData.mondayLunch, mondayMidNoon: this.dietData.mondayMidNoon, mondayDinner: this.dietData.mondayDinner,
      tuesdayEarlyMorning: this.dietData.tuesdayEarlyMorning, tuesdayBreakfast: this.dietData.tuesdayBreakfast, tuesdayMidMorning: this.dietData.tuesdayMidMorning, tuesdayLunch: this.dietData.tuesdayLunch, tuesdayMidNoon: this.dietData.tuesdayMidNoon, tuesdayDinner: this.dietData.tuesdayDinner,
      wednesdayEarlyMorning: this.dietData.wednesdayEarlyMorning, wednesdayBreakfast: this.dietData.wednesdayBreakfast, wednesdayMidMorning: this.dietData.wednesdayMidMorning, wednesdayLunch: this.dietData.wednesdayLunch, wednesdayMidNoon: this.dietData.wednesdayMidNoon, wednesdayDinner: this.dietData.wednesdayDinner,
      thursdayEarlyMorning: this.dietData.thursdayEarlyMorning, thursdayBreakfast: this.dietData.thursdayBreakfast, thursdayMidMorning: this.dietData.thursdayMidMorning, thursdayLunch: this.dietData.thursdayLunch, thursdayMidNoon: this.dietData.thursdayMidNoon, thursdayDinner: this.dietData.thursdayDinner,
      fridayEarlyMorning: this.dietData.fridayEarlyMorning, fridayBreakfast: this.dietData.fridayBreakfast, fridayMidMorning: this.dietData.fridayMidMorning, fridayLunch: this.dietData.fridayLunch, fridayMidNoon: this.dietData.fridayMidNoon, fridayDinner: this.dietData.fridayDinner,
      saturdayEarlyMorning: this.dietData.saturdayEarlyMorning, saturdayBreakfast: this.dietData.saturdayBreakfast, saturdayMidMorning: this.dietData.saturdayMidMorning, saturdayLunch: this.dietData.saturdayLunch, saturdayMidNoon: this.dietData.saturdayMidNoon, saturdayDinner: this.dietData.saturdayDinner,
      sundayEarlyMorning: this.dietData.sundayEarlyMorning, sundayBreakfast: this.dietData.sundayBreakfast, sundayMidMorning: this.dietData.saturdayMidMorning, sundayLunch: this.dietData.sundayLunch, sundayMidNoon: this.dietData.sundayMidNoon, sundayDinner: this.dietData.sundayDinner};*/
    this.httpDietService.createDiet(this.dietData, 2, this.customerId)
      .subscribe(()=> {
        this.navigateToDiets();
      });
  }

  onSubmit(): void {
    if(this.dietForm.form.valid) {
      console.log(this.dietData);
      this.addDiet();
    } else {
      console.log('Invalid Data');
    }
  }
}
