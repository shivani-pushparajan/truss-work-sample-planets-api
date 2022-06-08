import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SwapiService {

  	constructor(private http: HttpClient) {}

    getPlanets(pageUrl?: string) : Observable<any> {
       return this.http.get(pageUrl || environment.swapApiUrl); // use URL if provided, or fallback to environment variable
    }
}