import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginserviceService } from '../../services/loginservice.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  students: any;
constructor(private studentService : StudentService) {

}
  

  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next: (response) => {
        this.students = response;
        console.log('Students fetched successfully:', this.students);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
        alert('Failed to fetch students. Please try again later.');
      }
    })
  }
}
