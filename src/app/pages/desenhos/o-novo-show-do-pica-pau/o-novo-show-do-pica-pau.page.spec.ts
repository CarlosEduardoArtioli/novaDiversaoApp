import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ONovoShowDoPicaPauPage } from './o-novo-show-do-pica-pau.page';

describe('ONovoShowDoPicaPauPage', () => {
  let component: ONovoShowDoPicaPauPage;
  let fixture: ComponentFixture<ONovoShowDoPicaPauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONovoShowDoPicaPauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ONovoShowDoPicaPauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
