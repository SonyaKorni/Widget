import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-left',
  templateUrl: './widget-left.component.html',
  styleUrls: ['./widget-left.component.css']
})
export class WidgetLeftComponent implements OnInit {
  WeatherData: any;
  city: string = 'Kiev';
  errorWeather: boolean = false;
  constructor() { }


  ngOnInit() {
    this.getWeatherData();
  }
  receaveMessage($event) {
    this.city = $event;
    this.getWeatherData()
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=c3faa01389d57c1ba50ebe54e09ba719')
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})
  }
  setWeatherData(data){
    if (data.cod == '404' ){
      this.errorWeather = true;
    } else{
      this.errorWeather = false;
      this.WeatherData = data;
    }


    this.WeatherData.data = new Date();
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_faren = (this.WeatherData.temp_celcius * 9/5 + 32).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);

  }
  fullDate: Date = new Date()
}
