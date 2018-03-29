import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kegs: Keg[] = [
    new Keg('Baby Boi IPA', 'Belltown Brewery', 6, 11),
    new Keg('Basic Bisque', 'CSS Suds', 4, 5),
    new Keg('Catfish Stout', 'IGA', 5, 8),
    new Keg('Firebrick', 'CSS Suds', 4, 5),
    new Keg('Maca Madness', 'Josh\'s Juices', 5, 4),
    new Keg('PB \'n Eggz', 'Hipster Hops', 4, 6),
  ];

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }

  employee = false;
  employeeLogin() {
    this.employee = true;
  }
  employeeLogout() {
    this.employee = false;
  }
}
