import { Injectable }               from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams  }  from '@angular/http';

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

  runProtocolGet (protocolPath: string, params?: {}): Observable<any> 
  {
    let path = 'http://' + this.ppServer + ':' + this.port + '/protocols/' + protocolPath;
    let search: URLSearchParams = new URLSearchParams();
    for(let p in params)
    {
       search.set(p, params[p]);
    }
    
    return this.http.get(path, {search: search})
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolGetVVV (): Observable<any> 
  {
    return this.http.get('assets/json/VVV.json')
                    .map(this.extract3)
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
    return this.http.get('assets/json/experimentType.json')
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
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolPost (protocolPath: string, params?: {}, data?: {}): Observable<any> 
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json;charset=utf-8;');

    let search: URLSearchParams = new URLSearchParams();
    for(let p in params)
    {
       search.set(p, params[p]);
    }
    let options = new RequestOptions( {headers: headers, search: search, body: data});
    let a: HTMLElement;
    
    console.log('runProtocolPost');
    console.log('data');
    console.dir(data);
    console.log('options');
    console.dir(options);
    return this.http.post('http://' + this.ppServer + ':' + this.port + '/auth/launchjob?_protocol=Protocols/' + protocolPath, data, options
    )
                    .map(this.extract)
                    .catch(this.handleError);
  }
  runProtocolPost1 (protocolPath: string, params?: {}, data?: {}): Observable<any> 
  {
    console.log('runProtocolPost1');
    return this.http.get('assets/json/allformulations.json')
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
  }
    private extract3(res: Response) {
      let body = res.json();
      return body || { };
  }
  private extractData(res: Response) {

      let body = res.json().data;
      console.log(body);
      return body || { };
  }
  private handleError (error: Response | any) 
  {
    console.log('handleError');
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
  fileUpload(file: File)
  {
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);

    return this.http.post('http://'+ this.ppServer+ ':' + this.port + '/jobs/', formData)
        .map(
          res => 
              {
                let data = res.json();
                return data;
              })
        .catch(error => Observable.throw(error))

  }
}
