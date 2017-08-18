import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cu-time',
  templateUrl: './time.component.html',
})

export class TimeComponent implements OnChanges {

  @Input() time;

  hour: number = null;
  min: number = null;
  totalTime: number = null;
  lastHour: number = null;
  lastMin: number = null;
  lastNum: number = null;

  ngOnChanges(change: any) {
    console.log(change)
    if(change.time) {
      this.hour = parseInt(this.time);
      console.log(this.hour);
      this.totalTime = parseInt(this.time.split(':').join(''));
      console.log(this.totalTime);
      this.min = parseInt(this.time);
      console.log(this.min);
    }
  }

  handleKeyPress(keypress: any) {
    console.log(keypress);
    if(keypress.key == "ArrowUp" || keypress.key == "ArrowDown") {
      let newHour = parseInt(keypress.target.value);
      let numTime = parseInt(keypress.target.value.split(':').join(''));
      let newMin = numTime%100;
      // am to pm
      if(this.lastMin == newMin && this.lastHour == 0 && newHour == 1) {
        this.time = (newMin < 10) ? "13:0"+newMin : "13:"+newMin;
      }
      // pm to am
      if(this.lastMin == newMin && this.lastHour == 23 && newHour == 12) {
        this.time = (newMin < 10) ? "00:0"+newMin : "00:"+newMin;
      }

      this.lastHour = newHour;
      this.lastMin = newMin;
    }
  }

  handleChange(changes: any) {
    console.log(changes);
  }

}
