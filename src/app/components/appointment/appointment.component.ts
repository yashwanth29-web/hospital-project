import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpservicesService, Appointment } from '../../services/httpservices.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentData: Appointment = {
    fullName: '',
    email: '',
    date: '',
    department: ''
  };

  appointments: Appointment[] = [];
  editMode = false;
  currentEditId: number | null = null;
  popupVisible = false;

  constructor(private service: HttpservicesService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.service.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  onSubmit() {
    if (this.editMode && this.currentEditId !== null) {
      this.service.updateAppointment(this.currentEditId, this.appointmentData).subscribe(() => {
        this.editMode = false;
        this.currentEditId = null;
        this.hidePopup();
        this.loadAppointments();
      });
    } else {
      this.service.createAppointment(this.appointmentData).subscribe(() => {
        this.hidePopup();
        this.loadAppointments();
      });
    }
    this.resetForm();
  }

  onEdit(appointment: Appointment) {
    this.appointmentData = { ...appointment };
    this.editMode = true;
    this.currentEditId = appointment.id ?? null;
    this.showPopup();
  }

  onDelete(id: number | undefined) {
    if (id) {
      this.service.deleteAppointment(id).subscribe(() => {
        this.loadAppointments();
      });
    }
  }

  showPopup() {
    this.popupVisible = true;
  }

  hidePopup() {
    this.popupVisible = false;
    this.resetForm();
  }

  resetForm() {
    this.appointmentData = {
      fullName: '',
      email: '',
      date: '',
      department: ''
    };
    this.editMode = false;
    this.currentEditId = null;
  }
}
