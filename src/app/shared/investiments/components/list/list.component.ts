import { Component, OnInit } from '@angular/core'
import { Investiments } from '../../model/investiments'

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

  constructor() {}

  ngOnInit(): void {}
}
