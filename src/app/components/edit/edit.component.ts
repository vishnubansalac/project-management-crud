import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from './../../project.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  project = {project_name : '', project_desc: '', project_start_date: '', project_end_date : ''};
  angForm: FormGroup;
  title = 'Edit Project';
  constructor(private route: ActivatedRoute, private router: Router, private service: ProjectService, private fb: FormBuilder) {
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

  updateProject(name, desc, startdate, enddate) {
    this.route.params.subscribe(params => {
    this.service.updateProject(name, desc, startdate, enddate, params['id']).subscribe(res => {
      this.router.navigate(['index']);
    });
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectData = this.service.editProject(params['id']).subscribe(res => {
        console.log('res--', res);
        if (res) {
          this.project = res[0];
        }
      });
    });
  }
}
