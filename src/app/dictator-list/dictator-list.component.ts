import { RequestsService } from './../Services/requests.service';
import { Component, OnInit } from '@angular/core';
import { Dictators } from '../interfaces/dictators';

@Component({
  selector: 'app-dictator-list',
  templateUrl: './dictator-list.component.html',
  styleUrls: ['./dictator-list.component.css'],
})
export class DictatorListComponent implements OnInit {
  dictatorlist: Dictators[] = [];
  constructor(private request: RequestsService) {}

  ngOnInit(): void {
    this.GetList();
  }

  deleteItem(index: number) {
    this.dictatorlist.splice(index,1);

    this.request.DeleteData(index).subscribe(() =>{});
  }

  GetList()
  {
    this.request.GetData().subscribe((data: Dictators[]) => {
      next: this.dictatorlist = data;
      console.log(this.dictatorlist.length);
    });

  }
}
