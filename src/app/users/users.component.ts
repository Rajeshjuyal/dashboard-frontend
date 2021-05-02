import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public usersData: any = [];

  //pagination
  public p: number = 1;

  //text search
  public items: any = [];

  constructor(private toastr: ToastrService, private router: Router,
    private api: UserService) {

    this.getUsers();
  }

  ngOnInit() {
  }


  // full text search

  initializeItems() {
    this.items = this.usersData;
  }

  searchItems(ev: any) {
    let val = ev;
    this.initializeItems();

    let arrayData: any[] = [];
    if (val == '') {
      arrayData = this.items;
    } else {
      if (val && val.trim() != '') {
        arrayData = this.items.filter((data) => data.title.toLowerCase() == val.toLowerCase());
      }
    }

    if (arrayData.length > 0) {
      this.usersData = arrayData;
    } else {
      //  this.toastr.warning('Your Search Data Is Not Found!', 'Warning!');
    }

  }

  statusUpdate(data) {
    let body = {
        status: null,
    };
    if (data.status == false) {

        body.status = 1;
    } else {

        body.status = 0;
    }
    this.api.onStatusUser(data._id, body).subscribe((res: any) => {
            if (res.response_code == 200) {
                this.toastr.info('User Status Updated...', 'Updated');
            } else {
                this.toastr.error(res.response_data, 'Error');
            }
        }
    );
}



  getUsers() {
    this.api.getUsersList().subscribe((res: any) => {
      this.usersData = res.response_data;

    })
  }

  onDeleteUser(key, index) {
    if (confirm('If you want to delete,Press OK button!') == true) {
        this.api.onDeleteSingleDataUser(key)
            .subscribe((response) => {
                this.toastr.info('User deleted...', 'User');
                var index = this.usersData.findIndex(obj => obj._id === key);
                this.usersData.splice(index, 1);
            });
    }
}

}
