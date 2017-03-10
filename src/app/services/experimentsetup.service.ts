import { Injectable }               from '@angular/core';

import { DataService }              from '../types/types';

@Injectable()
export class ExperimentSetupService extends DataService
{
    constructor()
    {
        super();
    }
}