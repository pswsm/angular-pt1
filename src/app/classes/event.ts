export class Event {
	#nom: string;
	#tipus: string;
	#data: Date;
	#lloc: string;
	#preu: number;

	constructor(nom: string, tipus: string, data: Date, lloc: string, preu: number) {
		this.#nom = nom;
		this.#tipus = tipus;
		this.#data = data;
		this.#lloc = lloc;
		this.#preu = preu;
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
}
