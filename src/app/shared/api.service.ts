import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postWriter(data: any) {
    return this.http.post<any>("http://localhost/api/writer/create.php", data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getWriters() {
    return this.http.get<any>("http://localhost/api/writer/view.php")
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getRoles() {
    return this.http.get<any>("http://localhost/api/roles/view.php")
      .pipe(map((res: any) => {
        return res;
      }));
  }


  getWriter(id: number) {
    return this.http.get<any>(`http://localhost/api/writer/view_one.php?writer_id=${id}`)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  updateWriter(data: any, id: number) {
    return this.http.put<any>(`http://localhost/api/writer/update.php?writer_id=${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  deleteWriter(id: number) {
    return this.http.delete<any>(`http://localhost/api/writer/delete.php?writer_id=${id}`)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
