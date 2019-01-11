import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { HttpResponseModel } from 'src/app/utils/interfaces';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: any[];
  total: number;
  config: Object[] = [
    { key: 'title', header: 'Tytuł' },
    { key: 'price', type: 'input', header: 'Cena' },
    { key: 'imgSrc', type: 'image', header: 'Obrazek' },
    { key: 'id', type: 'button', header: 'More', action: 'more' },
    { key: 'id', type: 'button', header: 'Delete', action: 'delete' },
  ];
  filters: BehaviorSubject<any> = new BehaviorSubject({
    itemsPerPage: 20,
    currentPage: 1,
    title: '',
    priceFrom: '',
  });

  newItem: Subject<any> = new Subject();

  constructor(
    private itemService: ItemsService,
    private router: Router
    ) {
    this.filters.subscribe((value) => {
      this.fetchItems();
    });

    this.newItem.subscribe((value) => {
      this.itemService.add(value).subscribe((resp) => {
        console.log(resp);
        this.fetchItems();
      });
    });
   }

  private fetchItems() {
    this.itemService.fetch(this.filters.value).subscribe((resp: HttpResponseModel) => {
      this.items = resp.data;
      this.total = resp.total;
    });
  }

  ngOnInit() {
  }

  updateFilters(key, value: number) {
    this.filters.next({
      ...this.filters.value,
      [key]: Number(value)
    });
  }

  actionFromDG({actionType, payload}) {
    switch (actionType) {
      case 'more':
        this.router.navigate(['/items', payload]);
        break;

      case 'delete':
        this.itemService.remove(payload).subscribe((resp) => {
          this.fetchItems();
        });
        break;

      default:
        break;
    }
  }

}
