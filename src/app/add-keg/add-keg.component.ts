import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {
  @Output() sendKeg = new EventEmitter();

  toggleKegForm() {
    
  }
  submitKegForm(newKegName: string, newKegBrand: string, newKegPrice: string, newKegABV: string) {
    let newKeg: Keg = new Keg( newKegName, newKegBrand, parseInt(newKegPrice), parseInt(newKegABV));
    this.sendKeg.emit(newKeg);
  }


  }
