import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http';

export class ServiceCuideBem{

    protected handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}