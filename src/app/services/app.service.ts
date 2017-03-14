import { Injectable }               from '@angular/core';

import { StateService }             from '../services/state.service';
import { StateParamsService }       from '../services/stateparams.service';
import { HTTPService }              from '../services/http.service';
import { ConfigService }            from '../services/config.service';
import { TrialService }             from '../services/trial.service';
import { DesignDataService }        from '../services/designdata.service';
import { DataService }              from '../types/types';
import { Selection }                from '../types/types';
import { UserData }                 from '../types/types';
import { LocalStorage }             from '../types/types';
import { CPanelData }               from '../types/types';

@Injectable()
export class AppService
{
    selection:      Selection;
    userData:       UserData;
    userName:       string;
    localStorage:   LocalStorage;
    workFlowType:   string;
    header:         string;
    showHeader:     boolean;
    CPanelData:     CPanelData [];
    experimentName: string;
    selected:       CPanelData;
    data:           CPanelData;

    constructor(
                private state:            StateService,
                private stateParams:      StateParamsService,
                private ppService:        HTTPService, 
                private configService:    ConfigService,
                private trialService:     TrialService,
                private designData:       DesignDataService,
                )
                {
                    this.selected = new CPanelData();
                    this.selection = new Selection();
                    this.header = this.configService.appTitle;
                }
    launchExperiment()
    {
        let experimentURL = this.trialService.getExperimentURL();
        window.open(experimentURL, 'experiment');
    }
    inIframe()
    { 
        try {
            return window.self !== window.top || (this.state.current.name == 'create');
        } catch (e) {
            return true;
        }
        
    }
    
    //Change the below to load from config
    //Remove for now till we have more workflows
    
    
    
    
//    $scope.showHeader = !inIframe();
    
    duplicateView(){
        window.open(window.location.href, '_blank');  
    };
    
    hideHeader()
    {        
        this.showHeader = !this.showHeader;
    };
        
    //Used to block tab clicks if nothing loaded
    trialIsNotSelected()
    {
        if(this.trialService.gotAllData)
        {
            return false;
        }
        else
        {
            return true;
        }     
    }

    //Change how the tabs appear
    linkClass(selectedState: string)
    {
      if (this.state.current.name == selectedState){
          return "btn active";
      }
      else 
      {
          return "btn"; 
      }
    };  
    
    
    changeTrial()
    {
        //this.state.go('default', {trialname: this.selection.trial}, {notify: true});
        
        console.log('changeTrial');
        this.loadTrial(); 
        
    };
    


    forceSSL()
    {
        if (window.location.protocol !== 'https:') 
        {
            window.location.href = 'https://'+this.ppService.ppServer+ ':'+ this.ppService.sslPort+ '/LabAutomation/';
        }
    };
    
    getPPUser()
    {

        this.userName ='pnekhaichuk';
        this.loadTrialData();
        // this.ppService.getPPUser()
        //   .subscribe(
        //     newdata => {
        //       this.userData = newdata;
        //       this.userName ='pnekhaichuk';
        //       this.loadTrialData();
        //   }, error => 
        //   {
        //       console.log(error);
        //       window.location.replace('https://' + this.ppService.ppServer+ ':' + this.ppService.sslPort+'/platform/authorize?state=lalogin&redirect_uri='+ window.location.href);  
        //   }); 
    }
    
    logout()
    { 

        window.location.replace('https://'+ window.location.hostname + ':9943/security/sessions/logout?&redir=' + window.location.href);
    }
    
    loadTrialData()
    {   
        
        console.log('loadTrialData');
        this.ppService.runProtocolGet(this.configService.controlPanelProtocol)
          .subscribe(
            newdata =>
                {   
                    console.log('newdata');
                    console.dir(newdata);
                    let data = <CPanelData[]>newdata;
                    this.CPanelData = data;
                    if (this.selection.trial_name != null)
                    {    
                        this.setSelection(this.selection.trial_name);
                        this.loadTrial();
                    } 
            // else if (this.localStorage.selection != null)
            // {
            //     let previousTrial = JSON.parse(this.localStorage.selection);
            //     this.setSelection(previousTrial.trial_name);
            //     this.loadTrial();
            // } 
                    else 
                    {
                        this.setSelection(this.selection.trial_name);
                        this.loadTrial();
                    }
   
            this.showHeader = !this.inIframe();
            this.experimentName = this.selection.trial_name
            
        }, error => {
            window.location.replace('https://'+this.ppService.ppServer+ ':'+ this.ppService.sslPort+'/platform/authorize?state=lalogin&redirect_uri='+ window.location.href);
        });


    };    
    
    setSelection(trialname: string)
    {
        if(this.selection.trial_name != '')
        {
            for (let i=0; i<this.CPanelData.length; i++)
            {
                if (this.CPanelData[i].trial_name == this.selection.trial_name)
                {
                    this.selection.project_name = this.CPanelData[i].project_name;
                    this.selection.subproject_name = this.CPanelData[i].subproject_name;  
                    this.selection.trial_name = this.CPanelData[i].trial_name;
                }
            }
            return;
        } 
         for (let i=0; i<this.CPanelData.length; i++)
         {
            if (this.CPanelData[i].trial_name == trialname)
            {
                this.selection.project_name = this.CPanelData[i].project_name;
                this.selection.subproject_name = this.CPanelData[i].subproject_name;  
                this.selection.trial_name = this.CPanelData[i].trial_name;
            }
        }
    };
    loadTrial()
    {
        for (let i=0; i<this.CPanelData.length; i++)
        {
            if (this.CPanelData[i].trial_name == this.selection.trial_name){
                this.trialService.trialConfig = this.CPanelData[i];
            }
        }

        //this.localStorage.selection = JSON.stringify(this.trialService.trialConfig);

        if (this.trialService.trialConfig.trial_name != null)
        {
            this.trialService.loadAllData(this.state.current.name);
        }
  
    }
    printDiv(divName:string)
    {
        console.log('printDiv');
        if (typeof divName === 'undefined')
        {
            return;
        }
        let printContents = document.getElementById(divName).innerHTML;
        let originalContents = document.body.innerHTML;
        let popupWin = window.open('', '_blank', 'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');      

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) 
        {
            
            popupWin.window.focus();

            popupWin.document.write('<!DOCTYPE html><html><head>' +
                '<link rel="stylesheet" href="../app/handsontable.full.min.css" />' +
                '<link rel="stylesheet" href="../app/laStyles.css" />' +
                '<link rel="stylesheet" href="../app/bootstrap.css"/>' +
                '<link rel="stylesheet" href="../app/angular-ui-tree.min.css"/>' +
                '</head><body onload="window.print()"><div>' + printContents + '</div></html>');

            popupWin.onbeforeunload = function (event) {
                popupWin.close();
                return '.\n';
            };
            popupWin.onabort = function (event) {
                popupWin.document.close();
                popupWin.close();
            }
        } 
        else 
        {
            let popupWin = window.open('', '_blank', 'width=800,height=600');
            popupWin.document.open();
            popupWin.document.write('<html><head>'+
                '<link rel="stylesheet" href="../app/handsontable.full.min.css" />' +
                '<link rel="stylesheet" href="../app/laStyles.css" />' +
                '<link rel="stylesheet" href="../app//bootstrap.css"/>' +
                '<link rel="stylesheet" href="../app/angular-ui-tree.min.css"/>' +
                '</head><body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
        popupWin.document.close();

        return true;
    };  
}

