import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

	#userList: User[];

	constructor() {
		let genreList: string[] = ['home', 'dona', 'altres'];
		this.#userList = [
			new User('pauseawesome', 'pauseawesome', 'admin', 'pau@pswsm.cat', 'solter', [], true, 'home')
		]
		for (let index = 0; index < 49; index++) {
			let nUser: User = new User(`user${index}`, `password${index}`, 'comprador', `user${index}@mail.cat`, 'solter', [], true, genreList[ index % 2 ]);
			this.#userList = [...this.#userList, nUser];
		}

		let parsedUsers: Array<any> = [];

		let localUsers: string | null = this.fetchFromLocalStorage();
		if (localUsers !== null) {
			parsedUsers = JSON.parse(localUsers);
		} else {
			parsedUsers = [];
		}

		parsedUsers

		parsedUsers.forEach(element => {
			this.#userList = [...this.#userList, User.fromJSON(element)];
		});
	}

	public get users() : User[] {
		return this.#userList;
	}

	/**
	 * userExists
	 * return 1 if username matches but password does not
	 * return 2 if both username and password match
	 * return 0 if username nor password match
	 */
	public userExists(user: User) : number {
		for (const usr of this.#userList) {
			if (usr.nom === user.nom) {
				if (usr.contra === user.contra) {
					return 2;
				}
				return 1;
			}
		}
		return 0;
	}

	/**
	 * userExists
	 * return 1 if username matches but password does not
	 * return 2 if both username and password match
	 * return 0 if username nor password match
	 */
	public getUserFromUsername(username: string, password: string) : User | number {
		for (const usr of this.#userList) {
			let placeholderUser: User = new User(username, password, '', '', '', [], true, '');
			if (usr.nom === placeholderUser.nom) {
				if (usr.contra === placeholderUser.contra) {
					return usr;
				}
				return 1;
			}
		}
		return 0;
	}

	/**
	 * appendUser
	 */
	public appendUser(user: User): void {
		this.#userList.push(user);
		this.saveToLocalStorage(user);
	}

	/**
	 * fetchFromLocalStorage
	 */
	public fetchFromLocalStorage(): string | null {
		return localStorage.getItem('userList');
	}

	/**
	 * saveToLocalStorage
	 */
	public saveToLocalStorage(user: User): void {
		let localUsers = this.fetchFromLocalStorage();
		if (localUsers !== null) {
			let localUserArray: any[] = JSON.parse(localUsers);
			localUserArray.push(user.toJSON());
			localStorage.setItem('userList', JSON.stringify(localUserArray));
		} else {
			localStorage.setItem('userList', JSON.stringify([user.toJSON()]))
		}
	}
}
