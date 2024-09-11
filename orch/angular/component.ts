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
