import {Injectable} from '@angular/core';

export interface ConfigOptions {
    id: number;
    login: string;
    email: number;
    name: string;
}

@Injectable()
export class ConfigOptionsService {
    options: ConfigOptions;

    setConfigOptions(configOptions: ConfigOptions): void {
        this.options = configOptions;
    }

    getConfigOptions(): ConfigOptions {
        return this.options;
    }

}
