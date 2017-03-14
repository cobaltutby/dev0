import { Component, OnInit }        from '@angular/core';

import { StateService }             from '../../../../services/state.service';
import { StateParamsService }       from '../../../../services/stateparams.service';
import { HTTPService }              from '../../../../services/http.service';
import { ConfigService }            from '../../../../services/config.service';
import { ExperimentSetupService }   from '../../../../services/experimentsetup.service';
import { DesignService }            from '../../../../services/design.service';
import { DesignDataService }        from '../../../../services/designdata.service';
import { ParentFormulationData }    from '../../../../types/types';


@Component({
    //moduleId:     'module.id',
  selector:     'my-parentformulation',
  templateUrl:  './parent.formulation.html',
})

export class ParentFormulationComponent implements OnInit
{
   
    constructor(
                private state:              StateService,
                private stateParams:      StateParamsService,
                private ppService:        HTTPService, 
                private configService:    ConfigService,
                private experimentSetup:  ExperimentSetupService,
                private design:           DesignService,
                private designData:       DesignDataService,
                )
    {

    }
    ngOnInit()
    {
        console.log('ParentFormulationComponent ngOnInit');
           this.design.parentFormulationHOTDiv = document.getElementById('parentFormulationHOT');
           if(this.designData.parentFormulation.gotData) this.design.setUpParentFormulationHOT();
    }

    uploadThenRunProtocol(file: any) 
    {   
        // let file = $event.file;
        // if (file[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        //     file[0] = file[0].slice(0, file[0].size, "application/x-zip-compressed")
        // }
        
        this.upload(file);
    };
    upload(file: any)
    {
  let xhr  = new XMLHttpRequest();
        xhr.withCredentials = true;
        let formData = new FormData();
        formData.append('files', file, file.name);

        xhr.onload = () => {
            let headers = this.parseHeaders(xhr.getAllResponseHeaders());
            let response = this.parseResponse(headers['Content-Type'], xhr.response);
            if(this.isSuccessStatus(xhr.status)) {
                //TO DO
            } else {
                console.log("error");
                console.log(response);
                //return;
            }

            //this.onCompleteUpload(item, response, xhr.status, headers);
        };
        xhr.upload.onprogress = (event) => {
            let progress = Math.round(event.loaded / event.total * 100);

            console.log(progress);
        };
        xhr.onloadend = () => {
            let headers = this.parseHeaders(xhr.getAllResponseHeaders());
            let response = this.parseResponse(headers['Content-Type'], xhr.response);
            this.loadParentFormulation(response.data.value);
            //this.onCompleteUpload(item, response, xhr.status, headers);
        };
        xhr.open('POST', 'https://srv-ict-14652.scnsoft.com:9943/jobs/?%24format=json', true);
        xhr.send(formData);
    
    }
     private isSuccessStatus(status: number) {
        return (status >= 200 && status < 300) || status === 304;
    }

    private parseHeaders(headers: string) {
        let dict = {};
        let lines = headers.split('\n');
        for (let i = 0; i < lines.length; i++) {
            let entry = lines[i].split(': ');
            if(entry.length > 1) {
                dict[entry[0]] = entry[1];
            }
        }
        return dict;
    }

    private parseResponse(contentType: string, response: string):any {
        let parsed = response;
        if(contentType && contentType.indexOf('application/json') === 0) {
            try {
                parsed = JSON.parse(response);
            } catch(e) {
            }
        }
        return parsed;
    }

    

    public fileOver(fileIsOver: boolean) 
    {

    }

    loadParentFormulation(jobID:number)
    {
        let params = {};
        if (jobID != null)
        {
            params = 
            {
                _jobid: jobID,
                TrialName:this.stateParams.trialname
            };            
        }
        else
        {
            params = {TrialName:this.stateParams.trialname};
        }

        this.ppService.runProtocolGet1(this.configService.parentFormulationProtocol, params)
        .subscribe(
                newdata =>  {   
                                let data:ParentFormulationData = newdata;
                                this.designData.parentFormulation.data = data;
                                this.experimentSetup.parentFormulation.data = this.designData.parentFormulation.data;
                                this.designData.parentFormulation.gotData = true;
                                this.experimentSetup.parentFormulation.gotData = this.designData.parentFormulation.gotData;
                                this.experimentSetup.processData = data.formulation;
                                this.design.setUpParentFormulationHOT();
                                
                            },
                error => console.log(error));
    };
    info()
    {
        
        this.loadParentFormulation(1);
         
    }
}
