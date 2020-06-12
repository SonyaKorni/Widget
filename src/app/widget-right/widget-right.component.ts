import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-right',
  templateUrl: './widget-right.component.html',
  styleUrls: ['./widget-right.component.css']
})
export class WidgetRightComponent implements OnInit {
  WeatherData: any;
  constructor() { }

  ngOnInit() {
    this.getWeatherData();
  }
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=c3faa01389d57c1ba50ebe54e09ba719')
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})
  }
  setWeatherData(data){
    this.WeatherData = data;

    this.WeatherData.data = new Date();
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_faren = (this.WeatherData.temp_celcius * 9/5 + 32).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);

  }
}
