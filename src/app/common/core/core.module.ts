import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {CartProductCommunicatorService} from '../cart-product-communicator.service';
import {ConfigOptionsService} from './config.options';
import {APP_CONST, appConstant} from './constants.service';
import {GeneratorFactory, GeneratorService} from './generator.service';

@NgModule({
    declarations: [],
    imports: [BrowserModule],
    exports: [],
    providers: [
        CartProductCommunicatorService,
        LocalStorageService,
        ConfigOptionsService,
        {provide: APP_CONST, useValue: appConstant},
        {provide: GeneratorService, useFactory: GeneratorFactory(7)}
    ]
})
export class CoreModule {
}