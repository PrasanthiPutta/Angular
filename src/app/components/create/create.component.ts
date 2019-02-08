import { Pipe,Directive,Component, OnInit } from '@angular/core';
import { DbdataService } from 'src/app/dbdata.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private DbdataService: DbdataService) { }
  createProject(ProjectName, Technology, ProjectDetails) {
    this.DbdataService.createProject(ProjectName, Technology, ProjectDetails);
  }
  ngOnInit() {
    
  }

}
