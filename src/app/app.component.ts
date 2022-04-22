import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlantService } from './service/plant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pizzas: Pizza[] =[] ;
  pizzas$: Observable<Pizza[]> = new Observable<Pizza[]>();  

  constructor( private plantService : PlantService) {}

  ngOnInit() {
 
   /*  this.pizzas$ = Observable.create((observer :any)=> {
      this.plantService.getAllAsyncAll().subscribe(
        (data: any) => {
          this.pizzas = data.data;
          observer.next(this.pizzas);
        },
        (error: any) => {
          observer.error(error);
        },
        () => {
          observer.complete();
        }
      );
    });  */
    this.pizzas$ = Observable.create((observer :any)=> {
      this.plantService.get().subscribe(
        (data: any) => {
          this.pizzas = data.data;
          observer.next(this.pizzas);
        },
        (error: any) => {
          observer.error(error);
        },
        () => {
          observer.complete();
        }
      );
    });

   // this.pizzas$ = pizza;
}
}
interface Pizza {
  ID:string;
  PlantCode:string;
  PlantName:string;

}

const pizza:Observable<Pizza[]> = of([
{
  ID: "1",
  PlantCode: "1",
  PlantName: "1"
},
{
  ID: "2",
  PlantCode: "2",
  PlantName: "2"
} ]);

