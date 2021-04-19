import { Component, OnInit, Input } from '@angular/core';
import { ApiService, ApiResponse } from '../service/api.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  @Input() personName: string

  constructor(
    private api: ApiService
  ) {
    this.personName = ''
  }

  ngOnInit() { }

  findPerson(personId: any) {
    this.api.getPersonNameById(personId)
      .subscribe((response: ApiResponse) => {
        this.personName = response.data
    })
  }
}
