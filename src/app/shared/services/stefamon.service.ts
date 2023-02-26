import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { Observable } from "rxjs";
import { Stefamon } from "../objects/Stefamon";

@Injectable({
  providedIn: "root",
})
export class StefamonService {
  private readonly API = `${environment.urlBackend}/stefamon`;

  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get<Stefamon[]>(`${this.API}/todos`);
  }

  buscarItemPorId(id: number) {
    return this.http.get<Stefamon>(`${this.API}/${id}`);
  }
}
