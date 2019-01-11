import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  data;
  config: Object[] = [
    { key: 'name', header: 'Name' },
    { key: 'phone', header: 'Phone' },
    { key: 'id', type: 'button', header: 'Delete', action: 'delete' },
  ];

  constructor(private workerService: WorkersService) { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.workerService.fetch().subscribe((resp) => {
      this.data = resp.data;
    });
  }

  actionFromDG({ actionType, payload }) {
    this.workerService.remove(payload).subscribe((resp) => {
      this.fetchData();
    });
  }

}
