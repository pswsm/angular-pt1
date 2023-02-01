export class User {

	#nom: string;
	#contra: string;
	#rol: string;
	#correu: string;
	#estat: string;
	#checkConds: boolean;
	#interessos: string[];
	#genere: string;
	/**
	 * User class
	 * username: string,
	 * password: string,
	 * role: string,
	 * email: string,
	 * ecivil: string,
	 * interessos: array of strings (or empty array),
	 * conds: boolean (usually true since form does not allow false)
	 */
	constructor(username: string, password: string, role: string, email: string, ecivil: string, interests: string[], conds: boolean, genere: string) {
		this.#nom = username;
		this.#contra = password;
		this.#rol = role;
		this.#correu = email;
		this.#estat = ecivil;
		this.#checkConds = conds;
		this.#interessos = interests;
		this.#genere = genere;
	}

	public get nom() {
		return this.#nom;
	}

	public get contra() {
		return this.#contra;
	}

	public get rol() {
		return this.#rol;
	}

	public get correu() {
		return this.#correu;
	}

	public get estat() {
		return this.#estat;
	}

	public get checkConds() {
		return this.#checkConds;
	}

	public get interessos() {
		return this.#interessos;
	}

	public get genere() : string {
		return this.#genere;
	}

	/**
	 * toJSON
	 */
	public toJSON() {
		return { nom: this.nom, contra: this.contra, rol: this.rol, correu: this.correu, estat: this.estat, checkConds: this.checkConds, interessos: this.interessos, genere: this.genere }
	}

	/**
	 * fromJSON
	 */
	public static fromJSON(obj:{ nom: string, contra: string, rol: string, correu: string, estat: string, checkConds: boolean, interessos: string[], genere: string } ) {
		return new User(obj.nom, obj.contra, obj.rol, obj.correu, obj.estat, obj.interessos, obj.checkConds, obj.genere);
	}
}
