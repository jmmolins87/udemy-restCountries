import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})


export class PorRegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public hasError: boolean = false;
  public termino: string = '';
  public activeRegion: string = '';
  public countries: Country[] = [];

  constructor(
    private countryService: CountryService
    ) { }

  activedRegion( region: string ) {
    if( region === this.activeRegion ) {
      return;
    }
    this.activeRegion = region;
    this.countryService.getRegion(region)
        .subscribe( countries => {
          this.countries = countries
        });
  }

  getClassCSS( region: string ): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
