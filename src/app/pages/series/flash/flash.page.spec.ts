import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlashPage } from './flash.page';

describe('FlashPage', () => {
  let component: FlashPage;
  let fixture: ComponentFixture<FlashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
