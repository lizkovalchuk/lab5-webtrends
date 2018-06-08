import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
// import { PeopleService } from '../people.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  guestSearch : Person = new Person();

  guests:Person[];

  findPeople(){
    console.log('search button clicked');
  }

  constructor(private peopleService: PeopleService) {    }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(results => this.guests = results);
    this.guestSearch.firstName = "Lee";
  }
}
