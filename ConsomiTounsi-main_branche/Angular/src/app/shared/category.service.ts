import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
baseUrl="http://localhost:8084/deleteCategory";
baseURL="http://localhost:8084/chercherCategory";
  constructor(private http:HttpClient) { }
  
  getCategList():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:8084/Category");
  }
  Createcategory(category:Category):Observable<Object>{
    return this.http.post(" http://localhost:8084/addCategory",category)
  }
  deleteCateg(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  updateCategory(id:number, category:Category): Observable<Object>{
    return this.http.put(`http://localhost:8084/update/Category`, category);
  }
getCategoryById(id:number) : Observable<Category>{
  return this.http.get<Category>(`${this.baseURL}/${id}`);
  
  }
}
