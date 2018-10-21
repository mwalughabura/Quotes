import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Say what', 'Just say what'),
    new Quote(1, 'Say what', 'Just say what'),
    new Quote(1, 'Say what', 'Just say what'),
    new Quote(1, 'Say what', 'Just say what'),
    new Quote(1, 'Say what', 'Just say what')
    ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote (isTobeDeleted, index) {
    if (isTobeDeleted) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
