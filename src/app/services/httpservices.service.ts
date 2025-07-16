import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Appointment {
  id?: number;
  fullName: string;
  email: string;
  date: string;
  department: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  private baseUrl = 'http://localhost:3001/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  createAppointment(data: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, data);
  }

  updateAppointment(id: number, data: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.baseUrl}/${id}`, data);
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
