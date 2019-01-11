import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  // id;
  id$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.params.subscribe((data)=>{
    //   this.id = data.id;
    // })

    this.id$ = this.activatedRoute.params.pipe(
      map((data)=>{
        return data.id;
      })
    );

   }

  ngOnInit() {
  }

}
