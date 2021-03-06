import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  myModal;

  @Input() newItem: Subject<any>;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.myModal = this.modalService.open(content);
  }

  sendForm(form: NgForm) {
    if (form.valid) {
      this.newItem.next(form.value);
      this.myModal.close();
    } else {
      console.warn('form invalid');
    }
  }

}
