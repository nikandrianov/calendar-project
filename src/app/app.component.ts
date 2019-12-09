import { Component } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: '<ejs-schedule [currentView]="setView" [eventSettings]="eventObject" [views]="setViews"></ejs-schedule>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendar-project';
  public setView: View = 'Month';
  public setViews: View[] = ["Day", "Month"];
  // public setDate: Date = new Date(2019, 11, 5);
  // private eventDate: DataManager = new DataManager ({
  // 	url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
  // 	adaptor: new WebApiAdaptor,
  // 	crossDomain: true
  // });
  // public eventObject: EventSettingsModel = {
  // 	dataSource: this.eventDate
  // }
  public eventObject: EventSettingsModel = {
  	dataSource: [{
  		EventTitle: "Test",
  		EventStart: new Date(2019, 11, 5, 4, 0),
  		EventEnd: new Date(2019, 11, 5, 6, 0)
  	}],
  	fields: {
  		subject: { name: 'EventTitle', default: "Pls, Enter Event Name!", title: "Enter Title"},
  		startTime: { name: 'EventStart'},
  		endTime: { name: 'EventEnd'}
  	}
  }
}
