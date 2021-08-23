import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Diet } from '../../../core/models/diet';
import { HttpDietService } from '../../../core/services/http-diet.service';

@Component({
  selector: 'app-diet-details',
  templateUrl: './diet-details.component.html',
  styleUrls: ['./diet-details.component.css']
})
export class DietDetailsComponent implements OnInit {

  diet: Diet;

  constructor(
    private route: ActivatedRoute,
    private httpDietService: HttpDietService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.httpDietService.getDiet(id)
      .subscribe(diet => {
        this.diet = diet;
      });
  }
}
