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

  refreshPosts(): void {
    this.fetchPosts(); // Re-fetch the posts when the button is clicked
  }
<div>
  <h2>Server-Side Rendered API Data</h2>
  
  <h3>Posts:</h3>
  <button (click)="refreshPosts()">Refresh Posts</button>
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


  import { registerApplication, start } from 'single-spa';

// MF1: Angular with CSR
registerApplication({
  name: 'mf1-angular-csr',
  app: () => System.import('mf1-angular-csr/main.js'),
  activeWhen: (location) => location.pathname.startsWith('/mf1'),
});

// MF2: Angular with SSR
registerApplication({
  name: 'mf2-angular-ssr',
  app: () => {
    return fetch('http://localhost:4000/mf2/render')
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById('mf2-container');
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;
        container.innerHTML = bodyContent;

        // Hydrate the Angular app
        return System.import('mf2-angular-ssr/main.js');
      });
  },
  activeWhen: (location) => location.pathname.startsWith('/mf2'),
  customProps: {
    domElementGetter: () => document.getElementById('mf2-container'),
  },
});

// MF3: React with CSR
registerApplication({
  name: 'mf3-react-csr',
  app: () => System.import('mf3-react-csr/main.js'),
  activeWhen: (location) => location.pathname.startsWith('/mf3'),
});

// MF4: React with SSR
registerApplication({
  name: 'mf4-react-ssr',
  app: () => {
    return fetch('http://localhost:4001/mf4/render')
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById('mf4-container');
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;
        container.innerHTML = bodyContent;

        // Hydrate the React app
        return System.import('mf4-react-ssr/main.js');
      });
  },
  activeWhen: (location) => location.pathname.startsWith('/mf4'),
  customProps: {
    domElementGetter: () => document.getElementById('mf4-container'),
  },
});

start();

