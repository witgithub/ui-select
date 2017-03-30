import { Component } from '@angular/core';
import {Subject} from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = ["asadad","bdsad","csadasd","bsdasda","csfsdfs","bfdsfs","casdsad","basdasd","casdasd","basdad","cadasd","b","c","b","c"];
  title = 'app works!';
  label = "label from parent";

  dataEmpty = [{},{}];

  dataObjects=[{id: 1, name:"witek"},{id: 2, name:"antek"},{id: 3, name:"roman"},
  {id: 4, name:"janusz"},{id: 5, name:"andrzej"},{id: 6, name:"romek"},{id: 7, name:"ziutek"}];

  settingsSelect = {
    showSearch: true,
    showLabel: true,
    emitPropertyName: 'id',
    showPropertyName: 'name'
  }

  selectValue(e){
    this.title = e;
    console.log(e);
    // thi
  }

}
