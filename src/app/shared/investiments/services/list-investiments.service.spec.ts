import { TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { ListInvestimentsService } from './list-investiments.service'
import { HttpClient } from '@angular/common/http'
import { Investiments } from '../model/investiments'

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService
  let httpTestingController: HttpTestingController
  let httpClient: HttpClient

  const url: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'

  const mockedlist: Investiments[] = [
    { name: 'Banco 1', value: 100 },
    { name: 'Banco 2', value: 100 },
    { name: 'Banco 3', value: 100 },
    { name: 'Banco 4', value: 100 },
    { name: 'Banco 5', value: 100 },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(ListInvestimentsService)
    httpTestingController = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('(U) should be listing all investiments', (done) => {
    service.list().subscribe({
      next: (response) => {
        expect(response[0].name).toEqual('Banco 1')
        expect(response[0].value).toEqual(100)
        expect(response[4].name).toEqual('Banco 5')
        expect(response[4].value).toEqual(100)
        done()
      },
    })

    const request = httpTestingController.expectOne(url)
    request.flush(mockedlist)

    expect(request.request.method).toBe('GET')
  })
})
