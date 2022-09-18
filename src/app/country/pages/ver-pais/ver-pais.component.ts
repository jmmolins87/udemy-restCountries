import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe( 
        switchMap(({ id }) => this._countryService.getCountryAlpha( id )),
        tap(console.log)
      )
      .subscribe( 
        country => this.country = country
      );
  }

}
