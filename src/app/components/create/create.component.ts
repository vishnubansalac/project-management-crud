import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Coin';
  angForm: FormGroup;
  constructor(private projectservice: ProjectService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      desc: ['', Validators.required ],
      startdate: [''],
      enddate: ['']
   });
  }
  addProject(name, desc, startdate, enddate) {
      this.projectservice.addProject(name, desc, startdate, enddate).subscribe((res) => {
        if (res) {
          this.router.navigate(['index']);
        }
      });
  }
  ngOnInit() {
  }
}
