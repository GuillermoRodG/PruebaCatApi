import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from "../../Service/ServiceService.1";
import { Gato } from '../../Modelo/Gato';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  gatos:Gatos[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getGatos()
    .subscribe(data=>{
      this.Gatos=data;
    })
  }

}
