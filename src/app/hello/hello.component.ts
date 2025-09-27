import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{ name }} </h1>`,
  styles: [`h1 {color: red;}`]
})
export class HelloComponent {
  @Input() name: string = '';   // <- đây là Input

  ngOnInit() {
    console.log("Hello init");
  }

  ngOnDestroy() {
    console.log("Hello destroy");
  }
}
