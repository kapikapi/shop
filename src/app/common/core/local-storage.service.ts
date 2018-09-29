import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    static setItem(key: string, item: string): void {
        localStorage.setItem(key, item);
    }

    static getItem(key: string): void {
        localStorage.getItem(key);
    }

    static removeItem(key: string): void {
        localStorage.removeItem(key);
    }

}
