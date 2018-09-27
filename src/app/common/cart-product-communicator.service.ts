import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicatorService {
    private channel = new Subject<any>();

    public channel$ = this.channel.asObservable();

    publishData(data: any) {
        this.channel.next(data);
    }
}
