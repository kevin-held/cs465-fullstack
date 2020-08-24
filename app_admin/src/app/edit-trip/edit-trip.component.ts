import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  @Input('trip') trip: Trip;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

 

  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip'])
  }
}
