import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MyComplexComponent } from './my-complex-component/my-complex-component.component';

@NgModule({
  declarations: [MyComplexComponent],
  imports: [BrowserModule],
  entryComponents: [MyComplexComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(MyComplexComponent, { injector });
    customElements.define('my-complex-element', el);
  }

  ngDoBootstrap() {}
}
