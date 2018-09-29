import {Component, Inject, OnInit, Optional} from '@angular/core';
import {LocalStorageService} from '../common/core/local-storage.service';
import {ConfigOptionsService} from '../common/core/config.options';
import {GeneratorService} from '../common/core/generator.service';
import {APP_CONST, appConstant} from '../common/core/constants.service';
@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

    constructor(private localStorageService: LocalStorageService,
                @Optional() private configOptionsService: ConfigOptionsService,
                @Inject(GeneratorService) private generatorService: string,
                @Inject(APP_CONST) private appConst: any) {}

    ngOnInit() {
        console.log(this.localStorageService);
        console.log(this.configOptionsService);
        console.log(this.generatorService);
        console.log(this.appConst);
    }
}
