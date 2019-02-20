import { Component, OnInit } from '@angular/core';
import {SpoolsServiceService} from "../spools-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-spools-form',
  templateUrl: './spools-form.component.html',
  styleUrls: ['./spools-form.component.css']
})
export class SpoolsFormComponent implements OnInit {

  sid:number;
  sname:string='';
  billings:string='';

  error:any;
  constructor(private spoolsService:SpoolsServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(param=>{
      this.sid=param.id;
    });
    if(this.sid) {
      this.spoolsService.getOneSpool(this.sid).subscribe(data => {
        this.sname = data.name;
        this.billings = data.billings.id;
      })
    }
    else{
      this.sid=0;
    }
  }


  saveSpools(){
    console.log(this.sname);
    this.spoolsService.saveSpools(this.sid,this.billings,this.sname).subscribe(result=>{
      if(result){
        this.router.navigate(['/spools']);
        return true;
      }
      else{
        return false;
      }
    },
      error1 => alert("Nie udało się zapisać"));


  }
}
