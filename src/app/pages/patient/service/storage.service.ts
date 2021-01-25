import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ILocalStorage {
    get(key: string, defaultValue: any): any;
    set(key: string, value: any): void;
    remove(key: string): void;
}

@Injectable()
export class StorageService implements ILocalStorage {
    constructor(@Inject(PLATFORM_ID) private platform: any) { }

    get(key: string, defaultValue: any = null): any {
        if (isPlatformBrowser(this.platform)) {
            const value = window.localStorage.getItem(key)
                ? window.localStorage.getItem(key)
                : defaultValue;

            return value;
        }
    }

    set(key: string, value: any): void {
        if (isPlatformBrowser(this.platform)) {
            window.localStorage.setItem(key, value);
        }
    }

    remove(key: string): void {
        if (isPlatformBrowser(this.platform)) {
            window.localStorage.removeItem(key);
        }
    }
}
