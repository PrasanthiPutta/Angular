import { Pipe, Directive, Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { DbdataService } from 'src/app/dbdata.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Projects: Object;

  constructor(private DbdataService: DbdataService) {  }

  ngOnInit() {
    this.DbdataService.getprojects().subscribe(data => {
      this.Projects = data
      console.log(this.Projects);
    }
  );
  }
 
}
