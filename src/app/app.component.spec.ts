import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardViewModel } from './viewmodel/dashboard.viewmodel'; // Import DashboardViewModel

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule // Add FormsModule here
      ],
      declarations: [
        AppComponent
      ],
      providers: [DashboardViewModel] // Provide DashboardViewModel here
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'case.study-code'`, () => {
    expect(component.title).toEqual('case.study-code');
  });
});
