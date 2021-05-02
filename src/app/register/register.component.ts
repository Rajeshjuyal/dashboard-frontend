import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../service/crud.service';
import { NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public RegisterDetails: any = {
    firstName: 'rajesh',
    lastName: 'juyal',
    email: 'admin@rajesh.com',
    password: '123456',
  };

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
    private api: CrudService,
  ) {}

  ngOnInit() {}

  RegisterSubmitData(form: NgForm) {
    console.log(this.RegisterDetails);
    this.api.postRegister(this.RegisterDetails).subscribe(
      (res: any) => {
        console.log(res);
        if (res.response_code == 201) {
          this.toastr.success('Register Successful', 'Success');
          this.router.navigate(['/login']);
        } else {
          this.toastr.error(res.response_data, 'Error');
        }
      },
      (error) => {
        this.toastr.error('Error', error.message);
      },
    );
  }
}
