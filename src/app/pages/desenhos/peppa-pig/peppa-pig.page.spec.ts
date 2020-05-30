import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeppaPigPage } from './peppa-pig.page';

describe('PeppaPigPage', () => {
  let component: PeppaPigPage;
  let fixture: ComponentFixture<PeppaPigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeppaPigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeppaPigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
