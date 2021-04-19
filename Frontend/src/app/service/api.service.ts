import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPersonNameById(id: number): Observable<ApiResponse> {
    const url = `${environment.baseUrl}api?id=${id}`
    return this.http.get<ApiResponse>(url)
  }

  postInstallmentsValue(value: number, installments: number): Observable<ApiResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }

    const url = `${environment.baseUrl}api?value=${value}&installments=${installments}`
    return this.http.post<ApiResponse>(url, httpOptions)
  }
}

export class ApiResponse {
  constructor() {
    this.success = false
    this.data = ''
    this.error = ''
  }

  success: boolean;
  data: string;
  error: string;
}
