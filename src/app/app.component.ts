import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private service:WeatherService){

  }
  cityName:string = 'Kozhikode'
  weatherData:any
  city?:string

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.city = this.cityName
  }

  onSubmit(){
    this.getWeatherData(this.cityName)
    this.city = this.cityName
    this.cityName = ''
   
  }

  private getWeatherData(cityName:string){
    this.service.weatherData(cityName).subscribe((data:any)=>{
      this.weatherData = data.main
      console.log(this.weatherData);
      
       
    })
  }
  
}
