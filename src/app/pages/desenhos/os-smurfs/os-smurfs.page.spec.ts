import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OsSmurfsPage } from './os-smurfs.page';

describe('OsSmurfsPage', () => {
  let component: OsSmurfsPage;
  let fixture: ComponentFixture<OsSmurfsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsSmurfsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OsSmurfsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
