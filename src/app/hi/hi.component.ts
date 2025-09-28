import { Component } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent {

  isDanger = false;
  isWarning = false;
  classes = "box red-border yellow-background";

}
