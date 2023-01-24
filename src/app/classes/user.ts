export class User {
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

	private set nom(v : string) {
		this.nom = v;
	}

	private set contra(v : string) {
		this.contra = v;
	}

	private set rol(v : string) {
		this.rol = v;
	}

	private set correu(v : string) {
		this.correu = v;
	}

	private set estat(v : string) {
		this.estat = v;
	}

	private set checkConds(v : boolean) {
		this.checkConds = v;
	}

	private set interessos(v : string[]) {
		this.interessos = v;
	}

	public get nom() {
		return this.nom;
	}

	public get contra() {
		return this.contra;
	}

	public get rol() {
		return this.rol;
	}

	public get correu() {
		return this.correu;
	}

	public get estat() {
		return this.estat;
	}

	public get checkConds() {
		return this.checkConds;
	}

	public get interessos() {
		return this.interessos;
	}
}
