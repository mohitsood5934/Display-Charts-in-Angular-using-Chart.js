import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showChartApp';
  data: Data[];
  url = 'http://localhost:4000/scores';
  name = [];
  score = [];
  chart = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((res:Data[])=>{
      res.forEach(y=>{
        this.name.push(y.name)
        this.score.push(y.score)
      })
      var arr=[]
      var typesOfChart=['line','bar']
      var ctx = document.getElementById('lineChart');
      var ctx1=document.getElementById('barChart');
      arr.push(ctx,ctx1)
      for(let i=0;i<arr.length;i++){
      this.chart = new Chart(arr[i], {
        type:typesOfChart[i],//line,bar,pie,doughnut
        data: {
          labels: this.name,
          datasets: [
            {
              label: 'Score',
              data: this.score,
              borderColor: '#3cba9f',
              fill: false,
              borderWidth: 1 
            
             
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true,
              
            }],
            yAxes: [{
              display: true,
              color: "rgba(255,99,132,0.2)"
            }],
          }
        }
      });
    }
    });
  }
}



  

