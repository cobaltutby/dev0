
import { Injectable }       from '@angular/core';

import { HTTPService }      from './http.service';
import { ConfigService }    from './config.service';

import { DataService }      from '../types/types';

@Injectable()
export class DesignDataService extends DataService
{

    constructor(private ppService: HTTPService, private configService: ConfigService)
    {
        super();

       
    }
    
    getData(trialName: string)
    { 
        console.log('DesignDataService getData');
        let designParams = {TrialName:trialName};
        this.ppService.runProtocolGetDesignData(this.configService.designProtocol, designParams)
            .subscribe(
                data =>  {
                            this.data = data; 
                            this.gotData = true;
                        },
                error => console.log(error));
    }
}

