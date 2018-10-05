import {InjectionToken} from '@angular/core';
const appConstant = {App: 'TaskManager', Ver: '1.0'};
export const APP_CONST = new InjectionToken<any>('app.config');
export const ConstProvider = {provide: APP_CONST, useValue: appConstant};
