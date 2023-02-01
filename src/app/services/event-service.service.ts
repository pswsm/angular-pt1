import { Injectable } from '@angular/core';
import { Event } from '../classes/event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
	private eventList: Event[];

	constructor() {
		let eventTypeList: string[] = [
			'Concert',
			'Cinema',
			'Fira',
			'Exposició',
			'Convenció',
			'Cursa'
		];
		let noms: string[] = [
			'de Pau',
			'per la Pau',
			'Benefic/a',
			'de Catalunya',
			'de l\'Alt Pirineu i Aran',
			'd\'Andorra',
			'de Girona',
			'de Barcelona',
			'de Lleida',
			'dels Prirneus',
			'Major',
			'd\'Armes',
			'de Medicina',
			'del Mediterrani',
			'd\'Estiu',
			'd\'Hivern'
		];
		let sites: string[] = [
			'Barcelona',
			'L\'Hospitalet de Llobregat',
			'Vic',
			'Civís',
			'Unha',
			'Aidí',
			'Girona',
			'Vielha',
			'Tarragona',
			'Salardú',
			'El Pla de l\'Ermita',
			'Andorra la Vella',
			'Ordino',
			'Encamp',
			'Escaldes',
			'Sant Julià de Lòria'
		]
		this.eventList = [];
		for (let index = 0; index < 100; index++) {
			let nType: string = eventTypeList[Math.floor(Math.random() * eventTypeList.length)]
			let nNom: string = nType + ' ' + noms[Math.floor(Math.random() * noms.length)];
			let nEvent: Event = new Event(
				nNom,
				nType,
				this.#getRandomDate(),
				sites[Math.floor(Math.random() * sites.length)],
				Math.random() * 200,
				index
			);
			this.eventList = [...this.eventList, nEvent];
		}
	}

	/**
	 * event list getter
	 * @returns eventList Event[]
	 */
	public get events() : Event[] {
		return this.eventList;
	}

	/**
	 * setter for eventList
	 * @param v Event[] A list of events
	 */
	private set events(v : Event[]) {
		this.eventList = v;
	}

	/**
	 * Generates a random date betwen to day, and today but next year
	 */
	#getRandomDate(): Date {
		let from: number = new Date().getTime();
		let to: number = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getTime();
		return new Date(Math.floor(Math.random() * (to - from + 1) + from));
	}

	/**
	 * Deletes the given Event object from the array. Compares by name
	 * @param eventName
	 * @returns Event[] The filtered original array
	 */
	public deleteEventByName(eventName: string): void {
		let newEvents: Event[] = this.events.filter(evn => evn.nom !==  eventName);
		this.events = newEvents;
	}

	/**
	 * Deletes the given Event object from the array using the unique ID
	 * @param eventId
	 * @returns Event[] The filtered original array
	 */
	public deleteEventById(eventId: number): void {
		let newEvents: Event[] = this.events.filter(evn => evn.id !==  eventId);
		this.events = newEvents;
	}

	/**
	 * Filters the events by location, but does not drop them out. No params means no filter is applied
	 */
	public filterLocation(value: string) {
		if (value === '') {
			return this.events;
		} else {
			return this.events.filter(event => event.lloc.toLowerCase().startsWith(value.toLowerCase()));
		}
	}
}
