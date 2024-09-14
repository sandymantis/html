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
import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-example',
  template: `<div id="ssr-rendered"></div>`, // This is where we'll append the specificNode
})
export class ExampleComponent implements OnInit {
  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.fetchAndParseHTML();
  }

  fetchAndParseHTML(): void {
    this.http.get('http://localhost:4001', { responseType: 'text' }).subscribe(
      (responseText) => {
        // Parse the HTML from the response text
        const parser = new DOMParser();
        const doc = parser.parseFromString(responseText, 'text/html');

        // Run querySelector to get a specific node within this HTML
        const specificNode = doc.querySelector('#desired-node'); // Change '#desired-node' to the selector of the node you want to select

        if (specificNode) {
          console.log('Found node:', specificNode);

          // Find the element with id="ssr-rendered" in the parent HTML's light DOM
          const ssrRenderedElement = this.elementRef.nativeElement.querySelector('#ssr-rendered');

          if (ssrRenderedElement) {
            // Empty the contents of ssrRenderedElement
            ssrRenderedElement.innerHTML = '';

            // Append the specificNode to ssrRenderedElement
            ssrRenderedElement.appendChild(specificNode);
          } else {
            console.error('Element with id="ssr-rendered" not found in the light DOM.');
          }
        } else {
          console.error('Specific node not found in the fetched HTML.');
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
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



import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-example',
  template: `<div id="ssr-rendered"></div>`, // This is where we'll append the specificNode
})
export class ExampleComponent implements OnInit {
  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.fetchAndParseHTML();
  }

  fetchAndParseHTML(): void {
    this.http.get('http://localhost:4001', { responseType: 'text' }).subscribe(
      (responseText) => {
        // Parse the HTML from the response text
        const parser = new DOMParser();
        const doc = parser.parseFromString(responseText, 'text/html');

        // Run querySelector to get a specific node within this HTML
        const specificNode = doc.querySelector('#desired-node'); // Change '#desired-node' to the selector of the node you want to select

        if (specificNode) {
          console.log('Found node:', specificNode);

          // Find the element with id="ssr-rendered" in the parent HTML's light DOM
          const ssrRenderedElement = this.elementRef.nativeElement.querySelector('#ssr-rendered');

          if (ssrRenderedElement) {
            // Empty the contents of ssrRenderedElement
            ssrRenderedElement.innerHTML = '';

            // Append the specificNode to ssrRenderedElement
            ssrRenderedElement.appendChild(specificNode);
          } else {
            console.error('Element with id="ssr-rendered" not found in the light DOM.');
          }
        } else {
          console.error('Specific node not found in the fetched HTML.');
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}





import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-demo',
  template: `
    <div>
      <h2>Random Joke</h2>
      <button (click)="fetchRandomJoke()">Get Another Joke</button>
      <div *ngIf="joke">
        <p><strong>Setup:</strong> {{ joke.setup }}</p>
        <p><strong>Punchline:</strong> {{ joke.punchline }}</p>
      </div>
    </div>
  `,
})
export class ApiDemoComponent implements OnInit {
  joke: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRandomJoke();
  }

  fetchRandomJoke(): void {
    this.http.get('https://official-joke-api.appspot.com/random_joke').subscribe(
      (data: any) => {
        this.joke = data;
      },
      (error) => {
        console.error('Error fetching joke:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../models/joke.model';  // Import the Joke interface

@Component({
  selector: 'app-api-demo',
  template: `
    <div>
      <h2>Random Joke</h2>
      <button (click)="fetchRandomJoke()">Get Another Joke</button> <!-- Refresh Joke Button -->
      <div *ngIf="joke">
        <p><strong>Setup:</strong> {{ joke.setup }}</p>
        <p><strong>Punchline:</strong> {{ joke.punchline }}</p>
      </div>
    </div>
  `,
})
export class ApiDemoComponent implements OnInit {
  joke: Joke | undefined;  // Use the Joke interface

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRandomJoke(); // Fetch a joke when the component initializes
  }

  fetchRandomJoke(): void {
    this.http.get<Joke>('https://official-joke-api.appspot.com/random_joke').subscribe(
      (data: Joke) => {
        this.joke = data;
      },
      (error) => {
        console.error('Error fetching joke:', error);
      }
    );
  }
}
