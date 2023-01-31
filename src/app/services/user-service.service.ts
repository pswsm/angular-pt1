import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

	private userList: User[];

	constructor() {
		this.userList = [
			new User('pswsm', 'pswsm', 'admin', 'pau@pswsm.cat', 'solter', [], true)
		]
		for (let index = 0; index < 49; index++) {
			let nUser: User = new User(`user${index}`, `password${index}`, 'comprador', `user${index}@mail.cat`, 'solter', [], true);
			this.userList = [...this.userList, nUser];
		}
	}

	public get users() : User[] {
		return this.userList;
	}

	/**
	 * userExists
	 * return 1 if username matches but password does not
	 * return 2 if both username and password match
	 * return 0 if username nor password match
	 */
	public userExists(user: User) : number {
		for (const usr of this.userList) {
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
		for (const usr of this.userList) {
			let placeholderUser: User = new User(username, password, '', '', '', [], true);
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
	public appendUser(user: User) {
		this.userList.push(user);
	}
}
