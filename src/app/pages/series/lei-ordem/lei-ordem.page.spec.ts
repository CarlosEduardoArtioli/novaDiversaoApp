import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeiOrdemPage } from './lei-ordem.page';

describe('LeiOrdemPage', () => {
  let component: LeiOrdemPage;
  let fixture: ComponentFixture<LeiOrdemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeiOrdemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeiOrdemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
