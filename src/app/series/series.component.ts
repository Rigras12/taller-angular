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
    });
  }

  getAverage(){
    let cantidad=0;
    let promedio=0;
    let suma=0;
    for(let numbe of this.series){
    suma+=numbe.seasons;
      cantidad+=1;
      console.log(suma)
    }
    promedio=suma/cantidad;
    return promedio;

  }

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }




}
