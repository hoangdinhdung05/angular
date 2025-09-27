import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "TEE"


  //Data binding
  //Event binding
  handler() {
    console.log("Click")
  }

  //Kết hợp data binding + Event binding

  user = {
    name: "Hoang Dung",
    age: 20
  }
}
