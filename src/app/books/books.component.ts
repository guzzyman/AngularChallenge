import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';

import { BooksService } from './books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BooksService) { }

  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  } 
}
