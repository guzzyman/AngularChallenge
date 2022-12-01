import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        author: 'Chinua Achebe',
        country: 'Nigeria',
        imageLink: 'https://images-na.ssl-images-amazon.com/images/I/91s8eIasTEL._AC_UL127_SR127,127_.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
        title: 'Things Fall Apart',
        amount: 25000
      },
      {
        author: 'Hans Christian Andersen',
        country: 'Denmark',
        imageLink: 'https://images-na.ssl-images-amazon.com/images/I/919jUkLL8NL._AC_UL127_SR127,127_.jpg',
        language: 'Danish',
        link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
        title: 'Fairy tales',
        amount: 17500
      },
      {
        author: 'Dante Alighieri',
        country: 'Italy',
        imageLink: 'https://images-na.ssl-images-amazon.com/images/I/61ZQeNJ2kxL._AC_UL127_SR127,127_.jpg',
        language: 'Italian',
        link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
        title: 'The Divine Comedy',
        amount: 18300
      },
      {
        author: 'Ugo C. Shege',
        country: 'Sumer and Akkadian Empire',
        imageLink: 'https://images-na.ssl-images-amazon.com/images/I/911pI+iDkCL._AC_UL127_SR127,127_.jpg',
        language: 'Akkadian',
        link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
        title: 'The Epic Of Gilgamesh',
        amount: 19800
      },
      {
        author: 'Dantata Mohammed',
        country: 'Italy',
        imageLink: 'https://images-na.ssl-images-amazon.com/images/I/91WyMdm13iL._AC_UL127_SR127,127_.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
        title: 'The Divine Comedy',
        amount: 18300
      },
      {
        author: 'Haliru Kayode',
        country: 'Sumer and Akkadian Empire',
        imageLink: 'https://images-na.ssl-images-amazon.com/images/I/911gAL0dO1L._AC_UL127_SR127,127_.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
        title: 'The Epic Of Gilgamesh',
        amount: 19800
      }
    ];
  }
}
