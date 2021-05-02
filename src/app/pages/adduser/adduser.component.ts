import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../service/crud.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  public url1: any = 'assets/img/blank.png';
  public addUser: any = {
    firstName: '',
    lastName: '',
    email:'',
    mobileNumber:'',
    password:'',
    role:'User',
    // imageUrl: '',
    // imageId: '',
    // filePath: ''
    //status: 'true',

}
    public isDisabled: boolean = false;
    public uploader: FileUploader = new FileUploader({url: environment.apiEndPoint + 'utils/upload/file/imagekit'});   // maxFileSize: 9999999


    constructor(private api: CrudService, private router: Router,
                private http: HttpClient, private toastr: ToastrService) {

        this.uploader.onBeforeUploadItem = item => {
            item.withCredentials = false;
        }

    }

  ngOnInit(): void {
  }

  // readUrl1(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         let formData = new FormData();
    //         formData.append('file', event.target.files[0]);
    //         this.isDisabled = true;
    //         this.api.uploadImage(formData).subscribe(res => {
    //             this.isDisabled = false;
    //             this.url = res.response_data[0].originalImage.url;
    //             this.toastr.success('Image uploaded successfully', 'Success');
    //             this.editCat.imageUrl = res.response_data[0].originalImage.url;
    //             this.editCat.imageId = res.response_data[0].originalImage.key;
    //             this.editCat.filePath = res.response_data[0].originalImage.filePath;
    //         }, error => {
    //             this.isDisabled = false;
    //             this.toastr.error('Could not upload image', 'Error', {timeOut: 4000});
    //         });
    //     }
    // }

  submitUser(form: NgForm) {
    this.api.postUser(this.addUser).subscribe((res: any) => {
        console.log(res)
        this.toastr.success('User Added Sucessfully', 'Success')
        this.router.navigate(['/users']);
    });
    

}
onCancel() {
this.router.navigate(['/users']);
}

}
