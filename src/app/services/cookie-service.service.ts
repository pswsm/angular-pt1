import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CookieServiceService {
	constructor() { }

	/**
	 * getCookie
	 */
	public getCookie(cookieName: string): string | undefined {
		let user: string | undefined = document.cookie.split('; ').find((row) => row.startsWith(cookieName))?.split('=')[1];
		return user;
	}

	/**
	 * parseJSONCookie
	 */
	public parseJSONCookie(cookieName: string): { [key: string]: any } | null {
		let user: string | undefined = document.cookie.split('; ').find((row) => row.startsWith(cookieName))?.split('=')[1];
		let parsedCookieVal: {} | null = null;
		if (user !== undefined) {
			parsedCookieVal = JSON.parse(user);
		}
		return parsedCookieVal;
	}

	/**
	 * deleteCookie
	 */
	public deleteCookie(cookieName: string) {
		document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
	}

	/**
	 * createCookie
	 */
	public createCookie(cookieName: string, value: any, options: string[] | null) {
		document.cookie = `${cookieName}=${value}; ${options?.join('; ')}`;
	}
}
