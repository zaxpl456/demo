import { Component, OnInit } from '@angular/core';
import {SpoolsServiceService} from "../spools-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-spools',
  templateUrl: './spools.component.html',
  styleUrls: ['./spools.component.css']
})
export class SpoolsComponent implements OnInit {
  model:any;

  constructor(private spools:SpoolsServiceService,private roter:Router) { }
  ngOnInit() {
    this.spools.getSpools().subscribe(data=>{
      this.model=data;
    })
  }

  edit(id:number){
    this.roter.navigate(['/spools-form', {id: id}])
  }
  delete(el:any){

    this.spools.delete(el.id).subscribe(result=>{
      if(result){
        this.ngOnInit();

        return true;
      }
      else{
        return false;
      }
    })

  }




}
