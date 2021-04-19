import { Component, OnInit, Input } from '@angular/core';
import { ApiService, ApiResponse } from '../service/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Input() resultCalculate: string

  constructor(
    private api: ApiService
  ) {
    this.resultCalculate = ''
  }

  ngOnInit(): void {
  }
  
  calculate(personId: any, installments: any) {
    this.api.postInstallmentsValue(personId, installments)
      .subscribe((response: ApiResponse) => {
        this.resultCalculate = response.data
    })
  }
}
