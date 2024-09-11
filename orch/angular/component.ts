import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './my-complex-component.component.html',
  styleUrls: ['./my-complex-component.component.css']
})
export class MyComplexComponent implements OnInit {
  @Input() title: string = 'Default Title';
  @Input() description: string = 'Default Description';
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  incrementCounter(): void {
    this.counter++;
  }
}


-----------

  import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complex',
  templateUrl: './app-complex.component.html',
  styleUrls: ['./app-complex.component.css']
})
export class AppComplexComponent implements OnInit {
  apiData: string[] = []; // Data fetched from the API

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // This API call is made during SSR to populate the data on the server side
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI(): void {
    // Example API call to a publicly available API
    this.http.get<string[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe(data => {
        this.apiData = data.map(post => post['title']); // Map the API data to the desired format
      });
  }

  refreshData(): void {
    // This method is called on the client side during CSR
    this.fetchDataFromAPI();
  }
}
