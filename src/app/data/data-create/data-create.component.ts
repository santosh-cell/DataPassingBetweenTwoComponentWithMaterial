import { Component, OnInit, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.css']
})
export class DataCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredTitle = '';
enteredContent = '';
@Output() postCreated=new EventEmitter();

onAddpost(){
  const post= {title:this.enteredTitle,content:this.enteredContent};
  this.postCreated.emit(post);

}


}
