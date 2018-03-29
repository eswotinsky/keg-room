export class Keg {
  public pintCount: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}

  orderPint() {
    this.pintCount--;
    console.log(`${this.name}: ${this.pintCount} pints remaining.`)
  }

  colorCode() {
    if (this.pintCount < 10) {
      return "bg-danger";
    }
    else {
      return "bg-info";
    }
  }
}
