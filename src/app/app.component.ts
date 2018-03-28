import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kegs: Keg[] = [
    new Keg('Beer1', 'Brand1', 3, 4),
    new Keg('Beer2', 'Brand2', 3, 4),
    new Keg('Beer3', 'Brand2', 3, 4),
    new Keg('Beer4', 'Brand1', 3, 4),
    new Keg('Beer5', 'Brand2', 3, 4),
    new Keg('Beer6', 'Brand3', 3, 4),
    new Keg('Beer7', 'Brand3', 3, 4)
  ];
  employee = false;
  employeeLogin() {
    this.employee = true;
  }
  employeeLogout() {
    this.employee = false;
  }
}
