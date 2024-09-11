import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css']
})
export class ComplexComponent implements OnInit {
  title: string = 'Complex Component';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  showDetails: boolean = false;
  data: any = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
  };

  constructor() { }

  ngOnInit(): void { }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  addItem(item: string): void {
    this.items.push(item);
  }
}
