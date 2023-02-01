import { Component } from '@angular/core';
import { Event } from 'src/app/classes/event';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
	constructor(private eventList: EventServiceService) {}

	/**
	 * the actual page number on the pagination
	 */
	p: number = 1;

	/**
	 * the number of items per page
	 * default is 10
	 */
	ipp: number = 10;

	/**
	 * event list getter wrapper
	 * return an aray of Event
	 */
	getEventList(): Event[] {
		return this.eventList.events;
	}

	filterQuery: string = '';

	onTableSizeChange(event:any): void {
		this.ipp = event.target.value;
		this.p = 1;
		this.getEventList();
	}
}
