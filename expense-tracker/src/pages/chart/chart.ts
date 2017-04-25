import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Chart page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class Chartpage {
chartOptions:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.chartOptions={
    chart: {
            type: 'bar'
        },
        title: {
            text: 'Monthly Expenses Graph'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar','Apr','May']
        },
        yAxis: {
            title: {
                text: 'amount spend'
            }
        },
        series: [{
            name: 'expense',
            data: [20, 35, 15]
        }]

  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chart');
  }

}
