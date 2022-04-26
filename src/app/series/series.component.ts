import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie>=[];


  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series= series;
      console.log(1);
      console.log(series);
      console.log(2)
    });
  }

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }




}
