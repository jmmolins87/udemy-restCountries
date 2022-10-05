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
  public suggerimentsCountries: Country[] = [];
  public showSuggeriments: boolean = false;

  constructor(
    private _countryService: CountryService
  ) { }
  
  buscar( termino: string) {
    this.showSuggeriments = false;
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
    this.showSuggeriments = true;
    this.hasError = false;
    this.termino = termino;
    this._countryService.searchCountry( termino )
        .subscribe( countries => this.suggerimentsCountries = countries.splice(0, 5),
        (err) => this.suggerimentsCountries = []
        )
  }

  searchSuggermients( termino: string ) {
    this.buscar( termino );
  }

}
