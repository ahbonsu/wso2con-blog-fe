import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrl: './blog-entry.component.scss'
})
export class BlogEntryComponent {
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec purus at lectus ultricies euismod. Integer feugiat, justo in fermentum faucibus, enim dui bibendum orci, et consectetur libero turpis vel felis.';
}
