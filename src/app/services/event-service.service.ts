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
			let nNom: string = nType + noms[Math.floor(Math.random() * noms.length)];
			let nEvent: Event = new Event(
				nNom,
				nType,
				this.#getRandomDate(),
				sites[Math.floor(Math.random() * sites.length)],
				Math.random() * 200
			);
			this.eventList = [...this.eventList, nEvent];
		}
	}

	public get users() : Event[] {
		return this.eventList;
	}

	#getRandomDate(): Date {
		let from: number = new Date().getTime();
		let to: number = new Date(new Date().getFullYear() + 1).getTime();
		return new Date(from + Math.random() * (to - from));
	}
}
