import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2'

  constructor(
    private http: HttpClient
  ) { }

  searchCountry(termino: string): Observable<Country[]>  {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  getCountryAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  getRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${ region }`;
    return this.http.get<Country[]>(url);
  }

}
