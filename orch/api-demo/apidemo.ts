import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent implements OnInit {
  posts: Post[] = [];
  weatherData: Weather | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.fetchWeather();
  }

  fetchPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe(data => {
        this.posts = data;
      });
  }

  fetchWeather(): void {
    const apiKey = 'your-openweathermap-api-key';
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    this.http.get<Weather>(url).subscribe(data => {
      this.weatherData = data;
    });
  }
}



export interface Weather {
  name: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}


<div>
  <h2>Server-Side Rendered API Data</h2>
  
  <h3>Posts:</h3>
  <ul>
    <li *ngFor="let post of posts">
      <strong>{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </li>
  </ul>

  <h3>Weather in {{ weatherData?.name }}:</h3>
  <div *ngIf="weatherData">
    <p>Temperature: {{ (weatherData.main.temp - 273.15) | number:'1.0-1' }} °C</p>
    <p>Weather: {{ weatherData.weather[0].description }}</p>
  </div>
</div>
