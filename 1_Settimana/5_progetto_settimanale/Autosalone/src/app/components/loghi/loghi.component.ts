import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-loghi',
  templateUrl: './loghi.component.html',
  styleUrls: ['./loghi.component.scss']
})

export class LoghiComponent implements OnInit {
  car!: Car[]
  brands: Car[] = []

  ngOnInit(): void {
    this.getBrand();
  }


async getBrand() {
  let response = await fetch ('assets/db.json')
  let data = await response.json();
  this.car = data;
  this.brands = this.car.slice(0,3)
}
}



