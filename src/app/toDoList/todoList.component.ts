import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo',
  styles: [`
    .card{
      background: beige;
      width: 400px;
      height: 150px;
      box-shadow: 5px 5px grey;
      border-radius: 5px;
      margin-bottom: 15px;
      margin-left: auto;
      margin-right: auto;
    }

    .card .header{
      background: antiquewhite;
      border-bottom: 1px solid gray;
      text-align: center;
      padding-top: 1px;
    }

    .card .body{
      padding-top: 2px;
      padding-left: 15px;

    }
  `],
  template: `
    <h1>Meet a Few People</h1>
    <div class="row">
      <div class="col-xs-4" *ngFor="let item of testData;">
        <div class="card">
          <div class="header">
            <h4>{{item.Last_Name}}, {{item.First_Name}}</h4>
          </div>
          <div class="body">
              <h5>School : {{item.School}}</h5>
              <h5>Age : {{item.Age}}</h5>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ToDoListComponent implements OnInit {

  public localState: any;
  public testData: any;
  constructor(
    public route: ActivatedRoute
  ) {
    this.testData = [
      {
        First_Name : 'Steve',
        Last_Name : 'Mathews',
        Age : '26',
        School : 'St. Davids'
      },
      {
        First_Name : 'David',
        Last_Name : 'Brook',
        Age : '26',
        School : 'St. Davids'
      },
      {
        First_Name : 'Emily',
        Last_Name : 'Thorne',
        Age : '24',
        School : 'Mountain Creek High'
      },
      {
        First_Name : 'Danielle',
        Last_Name : 'Conrad',
        Age : '27',
        School : 'Mountain Creek High'
      }
    ];
  }

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        /**
         * Your resolved data from route.
         */
        this.localState = data.yourData;
      });

    console.log('hello `toDO` component');
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
