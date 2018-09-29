import {InjectionToken} from '@angular/core';

export const GeneratorService = new InjectionToken<string>('generator');

export function GeneratorFactory(n: number) {
    return function (): string {
        return Math.random().toString(36).replace(/[^A-Za-z0-9]+/g, '').substr(0, n);
    };
}
