import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {

  baseUrl = environment.apiRoot + "/";
  // authUrl = environment.host + "/api";
  public loading = false;
  public loadingMessage = "Loading...";
  constructor(
    private http: HttpClient,
  ) {
    this.initAfterLogin();
  }

  initAfterLogin() {
  }

  public getAll(controller:any) {
    this.loading = true;
    return this.http.get(this.baseUrl + controller);
  }
  public read(controller:any, id:any) {
    this.loading = true;
    return this.http.get(this.baseUrl + controller + "/" + id);
  }
  //CREATE
  create(controller:any, model:any) {
    return this.post(controller, model);
  }

  //Post
  postSimple(controller:any) {
    this.loading = true;
    return this.http.post(this.baseUrl + controller, {});
  }
  //Post
  post(controller:any, model:any) {
    this.loading = true;
    return this.http.post(this.baseUrl + controller, model);
  }

  public getAllAsync(controller:any): Observable<any> {
    this.loading = true;
    return this.http
      .get<any>(this.baseUrl + controller)
      .pipe(tap((_) => console.log("Loaded")));
  }

  //list
  public list(listName:any) {
    this.loading = true;
    return this.http.get(this.baseUrl + "list/" + listName);
  }

  //READ
  public get(controller:any, id?:any) {
    this.loading = true;
    if (id) {
      return this.http.get(this.baseUrl + controller + "/" + id);
    }
    return this.http.get(this.baseUrl + controller);
  }

  //Update
  public update(controller:any, model:any) {
    this.loading = true;
    return this.http.put(this.baseUrl + controller, model);
  }

  //Delete
  public delete(controller:any, model:any) {
    this.loading = true;
    console.log(model);
    return this.http.delete(this.baseUrl + controller,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:model
    })
  }
/* 
  public downloadPDF(controller:any, model:any): any {
    var mediaType = "application/pdf";
    this.http
      .get(this.baseUrl + controller + model, { responseType: "blob" })
      .subscribe(
        (response:any) => {
          var blob = new Blob([response], { type: mediaType });
          console.log(blob);
          return blob;
        },
        (e) => {
          throwError(e);
        }
      );
  }
 */

}
