import { Component, OnInit } from '@angular/core';
import { CookieServiceService } from 'src/app/services/cookie-service.service';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Event } from "src/app/classes/event";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
	constructor(private eventList: EventServiceService, private cookieService: CookieServiceService) {}
	/**
	 * the user data from the cookie
	 */
	userCookie: { [key: string]: any } | null = this.cookieService.parseJSONCookie('userData');

	event_list!: Event[];
	filtered_event_list!: Event[];

	/**
	 * the actual page number on the pagination
	 */
	p!: number;

	/**
	 * the number of items per page
	 * default is 10
	 */
	ipp!: number;

	loc_filter!: string;
	preu_filter!: number;

	ngOnInit() {
		this.event_list = this.getAllEvents();
		this.p = 7;
		this.ipp = 10;
		this.filtered_event_list = this.event_list;
		this.loc_filter = '';
		this.preu_filter = 200;
	}

	getAllEvents(): Event[] {
		return this.eventList.events;
	}

	/**
	 * changes the size of the table when ipp variable changes
	 * @param event;
	 */
	onTableSizeChange(event: any): void {
		this.ipp = (event.target.value < 5 || event.target.value === '') ? 5 : event.target.value;
		this.p = 1;
		this.event_list = this.getAllEvents();
	}

	/**
	 * filters out the deleted event
	 */
	deleteEvent(event: any): void {
		let eventName: number = parseInt(event.target.value);
		console.log(eventName);
		
		this.eventList.deleteEventById(eventName);
		this.event_list = this.getAllEvents();
	}

	filter(): void {
		// console.log(this.loc_filter.toLowerCase());
		// console.log(this.preu_filter);
		
		this.filtered_event_list = this.event_list.filter(value => {
			if(value.lloc.toLowerCase().startsWith(this.loc_filter.toLowerCase())){
				if(value.preu <= this.preu_filter)
					return true;
			}
			return false;
		});
	}
}
