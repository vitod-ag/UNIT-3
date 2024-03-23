import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  car!:Car;
  private sub!:Subscription;
  constructor(private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getCar(params['id']);
    })
  }

  async getCar(id:string) {
    const response = await fetch('../../assets/db.json');
    const data: Car[] = await response.json();
    data.forEach(car => {
      if (car.model == id) {
        this.car = car
      }
    })
  }
}
