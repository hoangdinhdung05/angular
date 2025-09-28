import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "toggle",
  standalone: true,
  template: `
    <div
      class="toggle-wrapper"
      [class.checked]="checked"
      (click)="toggle()"
      tabindex="0">
      <div class="toggle"></div>
    </div>
  `,
  styles: [`
    .toggle-wrapper {
      width: 50px;
      height: 28px;
      background-color: #ccc;
      border-radius: 14px;
      position: relative;
      cursor: pointer;
      transition: background-color 0.3s ease;
      display: flex;
      align-items: center;
      padding: 2px;
      outline: none;
    }

    .toggle {
      width: 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }

    /* khi checked */
    .toggle-wrapper.checked {
      background-color: #4caf50; /* màu xanh khi bật */
    }

    .toggle-wrapper.checked .toggle {
      transform: translateX(22px); /* nút gạt sang phải */
    }
  `]
})
export class ToggleComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
