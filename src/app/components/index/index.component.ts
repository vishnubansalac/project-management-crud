import { ProjectService } from './../../project.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../Project';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  projects: any;

  constructor(private http: HttpClient, private service: ProjectService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.service.getProjects().subscribe(res => {
      console.log('res--', res);
      if (res) {
        this.projects = res;
      }
    });
  }

  deleteProject(id) {
    this.service.deleteProject(id).subscribe(res => {
      this.getProjects();
    });
  }
}
