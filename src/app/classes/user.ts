export class User {

	nom: string;
	contra: string;
	rol: string;
	correu: string;
	estat: string;
	checkConds: boolean;
	interessos: string[];
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
	constructor(username: string, password: string, role: string, email: string, ecivil: string, interests: string[], conds: boolean) {
		this.nom = username;
		this.contra = password;
		this.rol = role;
		this.correu = email;
		this.estat = ecivil;
		this.checkConds = conds;
		this.interessos = interests;
	}

	public get _nom() {
		return this.nom;
	}

	public get _contra() {
		return this.contra;
	}

	public get _rol() {
		return this.rol;
	}

	public get _correu() {
		return this.correu;
	}

	public get _estat() {
		return this.estat;
	}

	public get _checkConds() {
		return this.checkConds;
	}

	public get _interessos() {
		return this.interessos;
	}
}
