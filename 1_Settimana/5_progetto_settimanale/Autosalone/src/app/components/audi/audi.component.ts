import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {
  cars: Car[] = []
  audiCar: Car[] = []

  constructor() {
    this.getAudi();
  }

  async getAudi() {
    const response = await fetch('../../assets/db.json');
    const data: Car[] = await response.json();
    this.cars = data.filter(element => element.brand=="Audi")
  }
}