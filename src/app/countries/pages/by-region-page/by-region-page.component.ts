import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = []
  public regions: Region[] = ['America', 'Asia', 'Europe', 'Africa', 'Oceania']
  public isLoading = false;
  public selectRegion?:Region;
  
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byRegion.countries;
    this.selectRegion=this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectRegion=region;
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.isLoading = false;
        this.countries = countries;
      })
  }

}
