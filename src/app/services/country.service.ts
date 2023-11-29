import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  urlBase = 'https://restcountries.com/v3.1/'
  language = 'spa'

  constructor(
    private http : HttpClient
  ) { }

  getCountry () {
    return this.http.get(`${this.urlBase}lang/${this.language}`)
      .pipe(
        map((response: any) => {
          return response.map( (country: any) => {
            return {
              name: country.name.common,
              capital: country.capital[0],
              code: country.cca2,
              flag: country.flags.png
            }
          })
        })
      )
  }

}
