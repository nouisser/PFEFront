import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../request.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { TokenStorageService } from '../token-storage.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}