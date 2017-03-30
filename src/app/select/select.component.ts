import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() data:any[] = [];
  tempData:any[];
  @Output() dataChange:any = new EventEmitter<any>();
  showSelect:boolean;
  startData:string | number;
  @Input() label:string = 'label';
  @Input() showPropertyName:string = 'name';
  @Input() emitPropertyName:string = 'id';
  @Input() showSearch:boolean = false;
  @Input() showLabel:boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.data.length > 0){
    this.tempData = this.data;
    this.startData = this.data[0][this.showPropertyName];
    }
  }
  selectToggle(): void{
    this.showSelect ? this.showSelect = false : this.showSelect = true;
  }
  selectValue(item): void{
    this.showSelect = false;
    this.startData = item[this.showPropertyName];
    this.dataChange.emit(item[this.emitPropertyName]);
  }
  search(query:string | number) {
    this.tempData = this.data.filter(item => {
     return item[this.showPropertyName].toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
    });
    if(this.tempData.length === 0){
      this.startData = ' ';
    }else{
      this.startData = this.tempData[0][this.showPropertyName];
    }
  }
}
