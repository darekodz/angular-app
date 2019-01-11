import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() controls: any[];
  @Input() filters: BehaviorSubject<any>;
  @ViewChild('f') form: NgForm;
  mySub: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.mySub = this.form.valueChanges
    .pipe(
      filter((value)=>{
        if (JSON.stringify(value).includes('dupa')) {
          alert('Sam jestes ' + value.title);
          return false;
        }
        return true;
      }),
      map((value)=>{
        return {
          ...value,
          lastMod: Date.now()
        }
      })
    )
    .subscribe((value)=>{
      console.log(value);
      this.filters.next({
        ...this.filters.value,
        ...value
      })
    })
  }

  ngOnDestroy(): void {
    this.mySub.unsubscribe();
  }

}
