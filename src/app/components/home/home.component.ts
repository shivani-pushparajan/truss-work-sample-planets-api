import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiResponse } from 'src/app/models/api-response.model';
import { Planet } from 'src/app/models/planet.model';
import { SwapiService } from 'src/services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  planets: Array<Planet> = [];
  nextPage: string | undefined;
  previousPage: string | undefined;
  
  constructor(private swapiService: SwapiService, private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show(); // loader
    this.getPlanetsData();
  }

  getPlanetsData(pageUrl?: string) {
    this.swapiService.getPlanets(pageUrl).subscribe((data: ApiResponse) => {
      console.log("Data fetched : ", data);
      console.log("Next page fetch: ", data.next);

      this.planets = data.results;
      this.nextPage = data.next;
      this.previousPage = data.previous;

      this.planets.map(planet => { // calculating water surface area
        var radius = planet.diameter / 2;
        var surfaceArea = 4 * (22 / 7) * radius * radius;
        planet.waterSurfaceArea = Math.round(surfaceArea * (planet.surface_water / 100));
      });

      this.planets.sort((a, b) => (a.name < b.name ? -1 : 1)); // sorting planets alphabetically
      console.log("Planets - " , this.planets);
      this.spinnerService.hide(); // loader stop - when data fetched
    },
    (error) => {
      console.log("Error when loading data : " , error);
      alert("Error when loading data. Please try again later"); // Error handling when API call fails
    });
  }

  nextPageLoad() {
    this.spinnerService.show();
    this.getPlanetsData(this.nextPage);
  }

  previousPageLoad() {
    this.spinnerService.show();
    this.getPlanetsData(this.previousPage);
  }
}
