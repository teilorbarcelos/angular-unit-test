import { Component, OnInit } from '@angular/core'
import { Investiments } from '../../model/investiments'
import { ListInvestimentsService } from '../../services/list-investiments.service'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investiments!: Investiments[]

  constructor(private listInvestimentsService: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe({
      next: (response) => (this.investiments = response),
    })
  }
}
