import { Component } from '@angular/core';
import { Users } from '../Users';
import { UserServiceService } from 'src/app/components/Authentication/user-service.service';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  ngOnInit(): void {
    // Add your initialization logic here
  }



  userData:any=[]
  data: any;

  activeindex=-1;

  location='Submit';


  listuser :  Users[]
  id: number;








  showAdd = false;







  constructor(private userser:UsersService,private router:Router) {
    

  this.userser.getAllUser().subscribe((allData)=>
  {
    console.log(allData)
    this. userData=allData
  })
}

acceptUser(idUser: number) {
  this.userser.accepterUser(idUser).subscribe(
    () => {
      console.log('Utilisateur accepté avec succès');
      // Ajoutez ici les traitements supplémentaires après l'acceptation de l'utilisateur
    },
    (error) => {
      console.log('Erreur lors de l\'acceptation de l\'utilisateur:', error);
    }
  );
}


showForm() {
  this.showAdd = true;
}

updateuser(id:any){
  this.router.navigate(['updateuser', id]);
}

adduser(i:Users){
  this.listuser.push(i);
    }
deleteUsers(id: any, i: number) {
  this.userser.deleteUsers(id).subscribe(
    (result) => {
      console.log(result);
      this.userData.splice(i, 1);
      console.log(result);
    },
    (error) => {
      console.log('Error:', error);
    }
  );



 
}





}