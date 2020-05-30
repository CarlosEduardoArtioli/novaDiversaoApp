import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frozen2Page } from './frozen2.page';

describe('Frozen2Page', () => {
  let component: Frozen2Page;
  let fixture: ComponentFixture<Frozen2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frozen2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frozen2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
