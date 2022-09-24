import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ListComponent } from '../investiments/components/list/list.component'

import { BankingComponent } from './banking.component'

describe('BankingComponent', () => {
  let component: BankingComponent
  let fixture: ComponentFixture<BankingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(BankingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('(U) getSavings: should 10.8', () => {
    expect(component.getSavings).toBe(10.8)
  })

  it('(U) getWallet: should 50.8', () => {
    expect(component.getWallet).toBe(50.8)
  })

  it('(U) setWithdraw: should transfer 10.5 to wallet', () => {
    component.setWithdraw('10.5')
    expect(component.getSavings.toFixed(2)).toBe((0.3).toFixed(2))
    expect(component.getWallet).toBe(61.3)
  })

  it('(U) setDeposit: should transfer 20.5 to savings', () => {
    component.setDeposit('20.5')
    expect(component.getSavings.toFixed(2)).toBe((31.3).toFixed(2))
    expect(component.getWallet.toFixed(2)).toBe((30.3).toFixed(2))
  })

  it('(U) setWithdraw: should not to transfer with wrong data', () => {
    expect(component.setWithdraw('string')).not.toBeTruthy()
    expect(component.setWithdraw('100')).not.toBeTruthy()
    expect(component.setDeposit('string')).not.toBeTruthy()
    expect(component.setDeposit('100')).not.toBeTruthy()
    expect(component.getSavings).toBe(10.8)
    expect(component.getWallet).toBe(50.8)
  })

  it('(I) setDeposit: should transfer 10.5 to savings', () => {
    let element = fixture.debugElement.nativeElement
    element.querySelector('#input-deposit').value = '20.5'
    element.querySelector('#deposit-button').click()
    fixture.detectChanges()
    expect(component.getSavings.toFixed(2)).toBe('31.30')
    expect(element.querySelector('#poup-label').textContent).toEqual('31.30')
  })

  it('(I) setWithdraw: should transfer 10.5 to wallet', () => {
    let element = fixture.debugElement.nativeElement
    element.querySelector('#input-withdraw').value = '10.5'
    element.querySelector('#withdraw-button').click()
    fixture.detectChanges()
    expect(component.getWallet).toBe(61.3)
    expect(element.querySelector('#wallet-label').textContent).toEqual('61.30')
  })
})
