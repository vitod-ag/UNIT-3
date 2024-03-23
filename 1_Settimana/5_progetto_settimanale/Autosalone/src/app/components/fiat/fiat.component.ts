import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent {
  cars: Car[] = []
  fiatCar: Car[] = []

  constructor() {
    this.getFiat();
  }

  async getFiat() {
    const response = await fetch('../../assets/db.json');
    const data: Car[] = await response.json();
    this.cars = data.filter(element => element.brand=="Fiat")
  }
}
