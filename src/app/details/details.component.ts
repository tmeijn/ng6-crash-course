import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$;
  userId: number;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => this.userId = params.id );
  }

  ngOnInit() {
    this.data.getUserDetail(this.userId).subscribe( data => this.user$ = data);
  }

}
