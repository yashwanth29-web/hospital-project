import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ if you're using standalone components
  imports: [CommonModule], // ✅ Add this
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  students: any;

  doctors = [
  {
    name: 'Dr. Ayesha Khan',
    specialty: 'Cardiologist',
    timing: 'Mon–Fri: 9AM–1PM',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Dr. Raj Verma',
    specialty: 'Orthopedic Surgeon',
    timing: 'Tue–Sat: 10AM–2PM',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Dr. Neha Desai',
    specialty: 'Neurologist',
    timing: 'Mon–Thu: 11AM–4PM',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Dr. Arjun Reddy',
    specialty: 'Dermatologist',
    timing: 'Wed–Sun: 10AM–1PM',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Dr. Sneha Iyer',
    specialty: 'ENT Specialist',
    timing: 'Mon–Fri: 8AM–12PM',
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    name: 'Dr. Karan Kapoor',
    specialty: 'General Physician',
    timing: 'Daily: 9AM–6PM',
    image: 'https://randomuser.me/api/portraits/men/40.jpg'
  }
];


  constructor(private studentService: StudentService) {}

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
    });
  }

  // ✅ Fix 2: Add the missing method
  bookAppointment(name: string) {
    alert(`Booking appointment with ${name}`);
  }
}
