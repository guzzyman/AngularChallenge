import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Array<Book> = [];

  add(book: Book) {
    this.cart.push(book);
  }

  get() {
    return this.cart;
  }

  remove(book: Book) {
    this.cart = this.cart.filter((b) => b != book);
  }
}
