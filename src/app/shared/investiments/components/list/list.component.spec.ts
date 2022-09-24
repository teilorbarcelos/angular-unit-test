import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListComponent } from './list.component'

describe('ListComponent', () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('(U) shoul list investiments', () => {
    let investiments = component.investiments
    expect(investiments.length).toEqual(4)
    expect(investiments[0].name).toBe('Bradesco')
    expect(investiments[3].name).toBe('C6')
  })

  it('(I) should list investiments', () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll(
      '.list-items',
    )
    expect(investiments.length).toBe(4)
    expect(investiments[0].textContent.trim()).toBe('Bradesco | 100')
    expect(investiments[3].textContent.trim()).toBe('C6 | 400')
  })
})
