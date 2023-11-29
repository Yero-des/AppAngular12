import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  countries : any;
  constructor(private _countryService : CountryService) { }
 
  ngOnInit(): void {
    this._countryService.getCountry()
      .subscribe( country => {
        this.countries = country
        console.log(this.countries)
      })
        
  }

}
