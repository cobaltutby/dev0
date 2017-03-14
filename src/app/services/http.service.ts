import { Injectable }               from '@angular/core';
import { Http, Response, Headers }  from '@angular/http';

import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HTTPService 
{

  ppServer = 'srv-ict-14652.scnsoft.com';
  port = 9944;
  sslPort = 9943;
  tmpProtocolPath = 'LabAutomation/LaundryLiquids/design/ControlPanel'
  tmpUrl = 'https://'+ this.ppServer+ ':'+ this.sslPort + '/protocols/' + this.tmpProtocolPath;
  headers: Headers;


  constructor (private http: Http) 
  {
  }

  runProtocolGet (protocolPath: string, params?: {}): Observable<any[]> 
  {
    console.log('runProtocolGet');
    //return this.http.get('https://' + this.ppServer + ':' + this.sslPort + '/protocols/' + protocolPath, { headers: headers } )
    return this.http.get('assets/json/ControlPanel.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet0 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet0');
    return this.http.get('assets/json/ControlPanel.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGetDesignData(protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGetDesignData');
    return this.http.get('assets/json/protocol.responce.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet1 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet1');
    return this.http.get('assets/json/protocol.responce.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet2 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet2');
    return this.http.get('assets/json/experimenttypes.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet3 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet3');
    return this.http.get('assets/json/processparameters.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet4 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet4');
    return this.http.get('assets/json/avaliabletests.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet5 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet5');
    return this.http.get('assets/json/experiment2json.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet6 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet6');
    return this.http.get('assets/json/testshedule.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet7 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet7');
    return this.http.get('assets/json/formulationdata.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGet8 (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGet8');
    return this.http.get('assets/json/formulationdata.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGetStabilityView (protocolPath: string, params?: {}): Promise<any> 
  {
    return this.http.get('assets/json/stabilitySetupProtocol.json')
                    .toPromise()
                    .then(this.extract);
  }
  runProtocolGetEnteredStabilityData (protocolPath: string, params?: {}): Promise<any> 
  {
    return this.http.get('assets/json/getEnteredStabilityData.json')
                    .toPromise()
                    .then(res => res.json());
  }
  
  runProtocolGetStabilityData (protocolPath: string, params?: {}): Observable<any> 
  {
    console.log('runProtocolGetStabilityDaya');
    return this.http.get('assets/json/StabilityData.json')
                    .map(this.extract2)
                    .catch(this.handleError);
  }
  runProtocolPost (protocolPath: string, params?: {}, data?: {}): Observable<any> 
  {
    console.log('runProtocolPost');
    return this.http.get('https://' + this.ppServer + ':' + this.sslPort + '/auth/launchjob?_protocol=Protocols/' + protocolPath
    //{ headers: headers } 
    )
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolPost1 (protocolPath: string, params?: {}, data?: {}): Observable<any> 
  {
    console.log('runProtocolPost1');
    return this.http.get('publicPath/allformulations.json')
                    .map(this.extract)
                    .catch(this.handleError);
  }
  private extract(res: Response) {

      let body = res.json();
      return body || { };

      //string implementation
      //let data: string = res['_body'] || '';
      //return data || '';
  }
    private extract1(res: Response) {

      let body = res.json();
      console.dir(body);
      return body || { };

      //string implementation
      //let data: string = res['_body'] || '';
      //return data || '';
  }
    private extract2(res: Response) {

      let body = res.json();
      return body || { };

      //string implementation
      //let data: string = res['_body'] || '';
      //return data || '';
  }
  private extractData(res: Response) {

      let body = res.json().data;
      console.log(body);
      return body || { };
  }
  private handleError (error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  getPPUser()
  {
    return this.http.get('assets/json/currentuser.xml')
                    .map(this.extract)
                    .catch(this.handleError);
    };
}
  //  fileChange($event:any) 
  //   {
  //   let fileList: FileList = $event.target.files;
  //     if(fileList.length > 0) 
  //     {
  //         let file: File = fileList[0];
  //         let formData:FormData = new FormData();
  //         formData.append('uploadFile', file, file.name);
  //         let headers = new Headers();


         
  //         headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
  //         headers.append('Content-Type', 'multipart/form-data');
  //         headers.append('Accept', 'application/json');
  //         let data: any;
  //         let options = new RequestOptions({ headers: headers });
  //         this.http.post('http://srv-ict-14652.scnsoft.com:9944/jobs/', formData, options)
  //             .map(res => {res.json(); console.log('map.response')})
  //             .catch(error => Observable.throw(error))
  //             .subscribe(
  //                 data => {data = data; console.log('success')},
  //                 error => {
  //                             console.log('object');
  //                             console.dir(error);
  //                             console.log('end_object'); 
  //                             let body = error['_body'];
  //                             console.log(body);
  //                             let mydiv = document.getElementById('mylogin');
  //                             mydiv.innerHTML = body;
  //                          }
  //             )
  //     }
  //   }