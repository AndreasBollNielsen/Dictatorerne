import { Dictators } from './interfaces/dictators';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from './Services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dictatorerne';
dictatorLists: Dictators[] = [];
  constructor(private regservice: RequestsService) {}

  ngOnInit(): void {
    this.regservice.GetData().subscribe((data: Dictators[])=> {next: this.dictatorLists = data; complete: console.log(data)});
  }
}
