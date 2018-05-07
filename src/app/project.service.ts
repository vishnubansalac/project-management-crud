import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  result: any;
  constructor(private http: HttpClient) {}

  addProject(name, desc, startdate, enddate) {
    console.log('name, desc, startdate, enddate--', name, desc, startdate, enddate);
    const uri = 'http://localhost:4000/project/add';
    const obj = {
      name: name,
      desc: desc,
      startdate: startdate,
      enddate: enddate
    };
    return this
      .http
      .post(uri, obj)
      .map(res => {
        return res;
      });
  }

  getProjects() {
    const uri = 'http://localhost:4000/projects';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editProject(id) {
    const uri = 'http://localhost:4000/project/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateProject(name, desc, startdate, enddate, id) {
    const uri = 'http://localhost:4000/project/update/' + id;

    const obj = {
      name: name,
      desc: desc,
      startdate: startdate,
      enddate: enddate
    };
    return this
      .http
      .post(uri, obj)
      .map(res => {
        return res;
      });
  }

  deleteProject(id) {
    const uri = 'http://localhost:4000/project/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
