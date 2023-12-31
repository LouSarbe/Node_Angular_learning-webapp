import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BasicFlashcardComponent } from './basic-flashcard.component';

describe('BasicFlashcardComponent', () => {
  let component: BasicFlashcardComponent;
  let fixture: ComponentFixture<BasicFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BasicFlashcardComponent,
        HttpClientModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
