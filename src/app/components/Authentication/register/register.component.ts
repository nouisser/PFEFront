import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: {
    lastName: string;
    country: string;
    role: any;
    city : string
    companyName?: string;
    description?: string;
    shopName?: string;
    revenue: number;
    password: string;
    clientType: string;
    phoneNumberSite?: string;
    paymentEmail?: string;
    email: string;
    completeAddress: string;
    emailSite: string;
    address: string;
    technicianName: string;
    profilePic: File | null;
    url?: string;
    firstName: string;
    phoneNumber: string;
    activitySector?: string;
    postCode: string;
    userType: string;
    category?: string;
    nameTechnician: string;
    username: string;


  } = {
    lastName: '',
    country: '',
    role: '',
    city : '',
    companyName: '',
    description: '',
    shopName: '',
    revenue: 0,
    password: '',
    clientType: '',
    phoneNumberSite: '',
    paymentEmail : '',
    email: '',
    completeAddress: '',
    emailSite: '',
    address: '',
    technicianName: '',
    profilePic: null,
    url: '',
    firstName: '',
    phoneNumber: '',
    activitySector: '',
    postCode: '',
    userType: '',
    category: '',
    nameTechnician: '',
    username: '',
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user)
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
       

        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  onProfilePicChange(event: any): void {
    const files = event.target.files;
    this.user.profilePic =files[0]
  }

}
