import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpoolsServiceService {

  constructor(private http:HttpClient) { }


  getSpools():Observable<any>{
    return this.http.get('//localhost:8080/api/spools/get');
  }

  saveSpools(id:any,billingId:any,spoolsName:any): Observable<any>{
    const data={
      id: id,
      billings: billingId,
      name: spoolsName,
    };
    return this.http.post('//localhost:8080/api/spools/saveSpool',data);
  }


  delete(billingId:any): Observable<any>{
    const data={
      id: billingId,

    };
    return this.http.post('//localhost:8080/api/spools/delete',data);
  }

  getOneSpool(id:any):Observable<any>{
    const data={
      id:id,
    };

    return this.http.get('//localhost:8080/api/spools/getOne/'+id);

  }
}
