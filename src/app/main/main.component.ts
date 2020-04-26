import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
// import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
  newsData;
  constructor(private http:HttpClient) { }
  // constructor(private nas:NewsService) { }  //this for services concept
  ngOnInit() {

    let url="https://newsapi.org/v2/everything?q=bitcoin&from=2020-04-17&sortBy=publishedAt&apiKey=cdff711879ca4696afb620c73bed5fda";
    // this.nas.getNews(url)
    this.http.get(url)
    .subscribe(res=>
      {
        // console.log(res); //to fetch data
        this.resData=res;
        if(this.resData.status=="ok"){
          this.newsData=this.resData.articles;
          console.log(this.newsData)
        }
      })
  }

}

