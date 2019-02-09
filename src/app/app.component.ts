import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'verbruikskosten';

  // input variables
  hoursOfUsageADay;
  electricityCostOfKWhInCents;
  deviceWattage;

  dailyCostsInEuros;
  monthlyCostInEuros;
  yearlyCostInEuros;

  constructor() {
    this.hoursOfUsageADay = 4;
    this.electricityCostOfKWhInCents = 21;
    this.deviceWattage = 500;
    this.recalculateCosts();
  }


  recalculateCosts() {
    this.cleanupWrongInput();
    this.dailyCostsInEuros = this.getDailyCostInEuros();
    this.yearlyCostInEuros = this.getYearlyCost();
    this.monthlyCostInEuros = this.getMonthlyCostInEuros();

  }

  cleanupWrongInput() {
    this.parseInput(this.hoursOfUsageADay);
    if ( this.hoursOfUsageADay <= 0) {
      this.hoursOfUsageADay = 1;
    }

    if ( this.hoursOfUsageADay > 24) {
      this.hoursOfUsageADay = 24;
      alert('Hoeveel uren heb jij in een dag?! \nGebruik per dag wordt gewijzigd naar 24 uur.');
    }

    if ( this.electricityCostOfKWhInCents <= 0) {
      this.electricityCostOfKWhInCents = 1;
    }

    if ( this.deviceWattage <= 0) {
      this.deviceWattage = 1;
    }
  }


  parseInput(input) {

    const numbers = new RegExp(/^[0-9]+$/);
    if ( !numbers.test(input ) ) {
      // parse input to a number;
      const parsed = Number.parseInt(input, 0);
      console.log(parsed);
      if (Number.isNaN(parsed)) {
        input = 1;
      }
  }
}

  getYearlyCost() {
    const dailyCostInEuroCents = this.getDailyCostsInEuroCents();
    const averageDaysInYear = 365.25;
    const yearlyCostInEuroCents = dailyCostInEuroCents * averageDaysInYear;
    const yearlyCostInEuros = yearlyCostInEuroCents / 100;
    return yearlyCostInEuros;
  }

  getDailyCostsInEuroCents() {
    const dailyWh = this.deviceWattage * this.hoursOfUsageADay;
    const dailyKWh = dailyWh / 1000;
    return dailyKWh * this.electricityCostOfKWhInCents;
  }

  getDailyCostInEuros() {
    return this.getDailyCostsInEuroCents() / 100;
  }
  getMonthlyCostInEuros() {
    return this.yearlyCostInEuros / 12;
  }
}
