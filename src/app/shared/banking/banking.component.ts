import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private savings: number = 10.8
  private wallet: number = 50.8
  constructor() {}

  ngOnInit(): void {}

  get getSavings(): number {
    return this.savings
  }

  get getWallet(): number {
    return this.wallet
  }

  public setWithdraw(value: string): number | undefined | void {
    if (isNaN(Number(value))) {
      return
    }

    const withdraw: number = Number(value)

    if (this.getSavings < withdraw) {
      return console.log('Saldo insuficiente!')
    }

    this.savings -= withdraw
    this.wallet += withdraw
    return withdraw
  }

  public setDeposit(value: string): number | undefined | void {
    if (isNaN(Number(value))) {
      return
    }

    const deposit: number = Number(value)

    if (this.wallet < deposit) {
      return console.log('Saldo insuficiente!')
    }

    this.wallet -= deposit
    return (this.savings += deposit)
  }
}
