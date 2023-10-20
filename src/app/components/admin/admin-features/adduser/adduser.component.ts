import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Role, Users } from '../Users';
import { UserServiceService } from 'src/app/components/Authentication/user-service.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  myForm :FormGroup;
  @Output() aded = new EventEmitter<Users>();
 user:Users;
 roles: Role[] = []; // Liste des rôles disponibles
 selectedRoles: any[] = []; // Liste des rôles sélectionnés
  constructor(private userserv:UsersService) { }

  ngOnInit(): void {
    
    this.user = new Users(); // Initialize the transaction object

    this.myForm=new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      technicianName: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      phoneNumberSite: new FormControl(),
      nameTechnician: new FormControl(),
      revenue: new FormControl(),
      activitySector: new FormControl(),
      emailSite: new FormControl(),
      completeAddress: new FormControl(),
      passsword: new FormControl(),

      
    }) 
  }
  
  onSubmit() {
    // Handle the form submission here
    this.add();
  }

  add() {
    console.log(this.user); // Check the transaction object in the console
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    this.userserv.addUsers(this.user, headers).subscribe(
      response => {
        // Handle the response here
      },
      error => {
        // Handle the error here
      }
    );
  
    this.aded.emit(this.user);
    this.myForm.reset();
    window.location.reload();
  }
  
}
