import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from'rxjs';
import{Complaint} from '../model/Complaint';



@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
//private lien : "http://localhost:8081/ajouterComplaint";
//private path: "http://localhost:8081/getcomplaints";
//private l:"http://localhost:8084/deleteComplaint";
  constructor(private http:HttpClient) { }

addComplaint(complaint:Object):Observable<Object>{
  return this.http.post("http://localhost:8084/ajouterComplaint",complaint);
}
/*getComplaints():Observable<Complaint[]>{
  return this.http.get<Complaint[]>(${this.path});    
}*/
getComplaints():Observable<Complaint[]>{
  
   return this.http.get<Complaint[]>("http://localhost:8084/getcomplaints");
 }
deleteComplaints(id_recl:number):Observable<any>{
  return this.http.delete("http://localhost:8084/deleteComplaint/"+id_recl,{responseType:`text`});

}
}