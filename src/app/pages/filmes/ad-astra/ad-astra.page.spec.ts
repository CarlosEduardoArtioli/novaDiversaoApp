import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdAstraPage } from './ad-astra.page';

describe('AdAstraPage', () => {
  let component: AdAstraPage;
  let fixture: ComponentFixture<AdAstraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAstraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdAstraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
