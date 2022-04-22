import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";

export interface IApiService {
  collection: string;
  get(filterKey: string): Promise<any>;
  getAllAsyncAll(filterKey: string): Observable<any>;
  create(item: object): Promise<any>;
  update(item: object): Promise<any>;
  remove(item: object): Promise<any>;
  find(itemId: string): Promise<any>;
  filter(key: string, value: string): any;
}

@Injectable({
  providedIn: "root",
})
export class ApiService implements IApiService {
  constructor(protected api: HttpService) {}
  collection: string="";

  get(filterKey?: string):any{
    return this.api.getAll(this.collection);
  }
  create(item: object):any{
    return this.api.create(this.collection, item);
  }
  update(item: object):any{
    return this.api.update(this.collection, item);
  }
  remove(item: object):any{
    return this.api.delete(this.collection, item);
  }
  find(itemId: string):any{
    return this.api.getAll(this.collection + "/" + itemId);
  }
  filter(key: string, value: string) {
    throw new Error("Method not implemented.");
  }
  getQuery(query: string) {
    return this.api.getAll(this.collection + query);
  }
  postQuery(url:any, query:any) {
    return this.api.post(this.collection + url, query);
  }
  getAllAsyncAll(): Observable<any> {
    return this.api.getAllAsync(this.collection);
  }
}
