import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { WriterModel } from './dashboard.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formValue!: FormGroup;
  writerModelObj: WriterModel = new WriterModel();
  writerData !: any;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
    this.getAllWriter();
  }

  postWriterDetails() {
    this.writerModelObj.firstName = this.formValue.value.firstName;
    this.writerModelObj.lastName = this.formValue.value.lastName;
    this.writerModelObj.email = this.formValue.value.email;

    this.apiService.postWriter(this.writerModelObj).subscribe({
      next: (res: any) => {
        console.log(res);
        alert('Writer Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllWriter();
      },
      error: (err: any) => {
        console.error(err);
        alert('Something Went Wrong');
      }
    });
  }

  getAllWriter(){
    this.apiService.getWriter().subscribe(res => {
      console.log(res);
      this.writerData = res;
    });
  }
}
