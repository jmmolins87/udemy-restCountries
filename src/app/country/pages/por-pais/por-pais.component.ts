import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ ]
})
export class PorPaisComponent {

  public termino: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(
    private _countryService: CountryService
  ) { }
  
  buscar( termino: string) {
    this.hasError = false;
    this.termino = termino;
    
    this._countryService.searchCountry(this.termino)
    .subscribe( countries => {
      this.countries = countries;
    },(err) => {
      this.hasError = true;
      this.countries = [];
    });
  }

  sugerencias( termino: string ) {
    this.hasError = false;
    // this.termino = 
  }

}
