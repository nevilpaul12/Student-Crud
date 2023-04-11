import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

  constructor(private s1 : StudentService) { }

  
  insertdata(insertform: { value: any; })
  {
    return  this.s1.insertform1(insertform.value).subscribe();
  }

}