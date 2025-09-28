import { Component } from "@angular/core";
import {Author, authors} from "../authors.module";

@Component({
  selector: "author-list",
  template: `
    <author-details
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)"
      (delete)="onDeleted($event)">
    </author-details>

    <br>
    <div>
      current selected author: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
    </div>
  `
})
export class AuthorsListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(id: number) {
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }

  }
}
