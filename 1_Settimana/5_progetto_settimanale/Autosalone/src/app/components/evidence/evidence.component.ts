import { Component} from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
    selector: 'app-evidence',
    templateUrl: './evidence.component.html',
    styleUrls: ['./evidence.component.scss'],
})
export class EvidenceComponent {
    cars: Car[] = []; //array che conterrà tutti i post recuperati dal file JSON
    related: Car[] = []; // array che conterrà i post correlati selezionati casualmente
    alreadyIncluded: number[] = []; //array che conterrà gli indici dei post già inclusi nei post correlati, per evitare
    isLoaded:boolean = false;   // booleano che mi dice se la car è stata caricata o no

    constructor() {
        this.getCars();
    };

    async getCars() {
        const response = await fetch('../../assets/db.json');
        const data = await response.json();
        this.cars = data;
        this.getEvidencesCars();
    }

    getEvidencesCars() {
        for (let i = 0; i < 2; i++) {
            let index = Math.floor(Math.random() * this.cars.length);
            while (this.alreadyIncluded.includes(index)) {
                index = Math.floor(Math.random() * this.cars.length);
            }
            this.alreadyIncluded.push(index);
        }
        for (let i = 0; i < this.alreadyIncluded.length; i++) {
            let carsIndex = this.alreadyIncluded[i];
            this.related.push(this.cars[carsIndex]);
        }
        this.isLoaded = true;
    }
}
