import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Author} from "../authors.module";

@Component({
  selector: `author-details`,
  template: `
    <div>
      {{author.firstName}} {{author.lastName}}
      <button style="margin-left: 1rem" (click)="select.emit(author)">SELECT</button>
      <button style="margin-left: 1rem" (click)="delete.emit(author.id)">DELETE</button>
    </div>
  `
})

export class AuthorsDetailsComponent {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
