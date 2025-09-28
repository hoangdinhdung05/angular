import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() set progress (val: number) {

    if (typeof val != "number") {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress
      }
    }

    this._progress = val;
  };

  private _progress = 50;
  get progress() {
    return this._progress;
  }

  @Input() backgroundColor = "#ccc";
  @Input() progressColor = 'tomato';

  constructor() {
    console.log({
      process: this.progress,
      backgroundColor: this.backgroundColor,
      processColor: this.progressColor
    })
  }

  ngOnInit() {
  }

  //Sử dụng validate
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', {
      process: this.progress,
      backgroundColor: this.backgroundColor,
      processColor: this.progressColor
    })
  }

}
