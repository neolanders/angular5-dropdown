import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesFilterComponent } from './movies-filter.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Movie } from '../shared/models/movie';

import {
  ApiService,
  SharedModule,
  MoviesService
} from '../shared';

describe('MoviesFilterComponent', () => {
  let component: MoviesFilterComponent;
  let fixture: ComponentFixture<MoviesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BsDropdownModule.forRoot()
      ],
      providers: [
        ApiService,
        MoviesService
      ],
      declarations: [ MoviesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the dropdown components', async(() => {
    const fixture = TestBed.createComponent(MoviesFilterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('[dropdown]')).not.toBe(null);
  }));

  describe('"select" from Movie DropDown List', () => {
    beforeEach(() => {
      component.selectedMovieTitle = '';
      component.status = {
        selected: false,
        isopen: true
      };
      component.select({title: 'The Maze Runner', id: 198663} as Movie);
      fixture.detectChanges();
    });
    it('should Update the Dropdown Title', () => {
      expect(component.selectedMovieTitle)
        .toBe('The Maze Runner');
    });
    it('should Update selected status to true and display the clear button', () => {
      expect(component.status.selected)
        .toBeTruthy();
    });
    it('should Update isopen status to false and close the dropdown', () => {
      expect(component.status.isopen)
        .toBeFalsy();
    });
  });

  describe('"clear" when user click on btn-clear', () => {
    beforeEach(() => {
      component.selectedMovieTitle = 'The Maze Runner'; // Dummy DropdownTitle
      component.status.selected = true;
      component.clear();
      fixture.detectChanges();
    });
    it('should Clear the Dropdown Title', () => {
      expect(component.selectedMovieTitle)
        .toBe('');
    });
    it('should Update selected status to false and hide the clear button', () => {
      expect(component.status.selected)
        .toBeFalsy();
    });
  });
});
