import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(
    private _countryService: CountryService
  ) { }

  buscar(termino: string) {
    this.hasError = false;
    this.termino = termino;

    this._countryService.searchCapital(this.termino)
      .subscribe(countries => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.hasError = true;
        this.countries = [];
      });
  }

}
