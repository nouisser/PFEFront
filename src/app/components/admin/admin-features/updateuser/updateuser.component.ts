import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../Users';
import { SitesService } from '../sites.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  id: number;
  users: Users = new Users();

  constructor(
    private userservice: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userservice.getUserbyid(this.id).subscribe(
      data => {
        this.users = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.users);
    this.userservice.updateUser(this.users.id, this.users).subscribe(
      data => {
        console.log(data);
        this.goToUserList();
      },
      error => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(['user']);
  }
}
