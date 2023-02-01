export class Event {
	#nom: string;
	#tipus: string;
	#data: Date;
	#lloc: string;
	#preu: number;
	
	// Tot i que no el demanes, la poso perque a vegades els noms surten duplicats i s'esboren varis
	#id: number;

	constructor(nom: string, tipus: string, data: Date, lloc: string, preu: number, id: number) {
		this.#nom = nom;
		this.#tipus = tipus;
		this.#data = data;
		this.#lloc = lloc;
		this.#preu = preu;
		this.#id = id;
	}

	public get nom() : string {
		return this.#nom;
	}

	public get tipus() : string {
		return this.#tipus;
	}

	public get data() : Date {
		return this.#data;
	}

	public get lloc() : string {
		return this.#lloc;
	}

	public get preu() : number {
		return this.#preu;
	}

	public get id() : number {
		return this.#id;
	}
}
