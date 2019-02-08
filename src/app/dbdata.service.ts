import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbdataService {
  uri = 'http://localhost:5000/create';
  constructor(private http: HttpClient) { }

  createProject(ProjectName, Technology, ProjectDetails) {
    const obj = {
      ProjectName: ProjectName,
      Technology: Technology,
      ProjectDetails: ProjectDetails
    };
    this.http.post(`${this.uri}/createproject`, obj)
        .subscribe(res => console.log('Done'));
  }
  getprojects() {
    return this.http.get('http://localhost:3000/getproducts');
  }
  
}
