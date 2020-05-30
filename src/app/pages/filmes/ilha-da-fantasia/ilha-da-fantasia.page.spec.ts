import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IlhaDaFantasiaPage } from './ilha-da-fantasia.page';

describe('IlhaDaFantasiaPage', () => {
  let component: IlhaDaFantasiaPage;
  let fixture: ComponentFixture<IlhaDaFantasiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlhaDaFantasiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IlhaDaFantasiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
