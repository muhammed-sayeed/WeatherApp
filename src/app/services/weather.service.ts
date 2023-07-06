import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 
    
  }

  weatherData(city: string) {
    const apiKey = environment.apiKey;
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  }
  
 
}
