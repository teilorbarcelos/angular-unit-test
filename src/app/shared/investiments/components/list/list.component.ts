import { Component, OnInit } from '@angular/core'
import { Investiments } from '../../model/investiments'
import { ListInvestimentsService } from '../../services/list-investiments.service'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investiments: Investiments[] = [
    {
      name: 'Bradesco',
      value: 100,
    },
    {
      name: 'BB',
      value: 200,
    },
    {
      name: 'Nubank',
      value: 300,
    },
    {
      name: 'C6',
      value: 400,
    },
  ]

  constructor(private listInvestimentsService: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe({
      next: (response) => console.log(response),
    })
  }
}
