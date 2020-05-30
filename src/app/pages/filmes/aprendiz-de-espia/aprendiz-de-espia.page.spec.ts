import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprendizDeEspiaPage } from './aprendiz-de-espia.page';

describe('AprendizDeEspiaPage', () => {
  let component: AprendizDeEspiaPage;
  let fixture: ComponentFixture<AprendizDeEspiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendizDeEspiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprendizDeEspiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
