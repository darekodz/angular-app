import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridComponent } from './datagrid.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('DatagridComponent', () => {
  let component: DatagridComponent;
  let fixture: ComponentFixture<DatagridComponent>;
  let template: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
    component.config = [
      { key: 'title', header: 'Tytuł' }, 
      { key: 'imgSrc', header: 'Obrazek', type: 'image' }, 
      { key: 'id', header: 'Baton', type: 'button' }];
    component.data = [
      { title: 'tomato', imgSrc: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg', id: 'dfgdfgdfgdf'},
      { title: 'other', imgSrc: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg', id: 'cvbcvbbcvbc' },
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display two columns', () => {
    // console.log('*****************', template.nativeElement)
    const head = template.query(By.css('table thead'));
    const thCount = head.queryAll(By.css('th'));
    // console.log('************', thCount.length);
    expect(thCount.length).toBe(3);
  });

  it('should display two rows', () => {
    const rows = template.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2);
    expect(rows[0].nativeElement.innerText).toContain('tomato');
  });

});
