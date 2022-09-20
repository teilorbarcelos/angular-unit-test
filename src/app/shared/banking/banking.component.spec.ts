import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BankingComponent } from './banking.component'

describe('BankingComponent', () => {
  let component: BankingComponent
  let fixture: ComponentFixture<BankingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent],
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

  it('(U) setDeposit: should transfer 10.5 to savings', () => {
    component.setDeposit('20.5')
    expect(component.getSavings.toFixed(2)).toBe((31.3).toFixed(2))
    expect(component.getWallet.toFixed(2)).toBe((30.3).toFixed(2))
  })
})
