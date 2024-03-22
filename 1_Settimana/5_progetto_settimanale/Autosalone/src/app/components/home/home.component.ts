import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  brand!: Car;
  brands!: Car[]

  // constructor () {
  //   this.getBrand();
  // }
  
  // async getBrand() {
  //   const response = await fetch('../../assets/db.json');
  //   const data = await response.json();
  //   this.brands =
  // }

}

