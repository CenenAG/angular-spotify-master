import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { SessionGuard } from './session.guard';
import { RouterTestingModule } from '@angular/router/testing';


 //TODO:  examen del session guard
describe('Testing of session guard', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
    });
    guard = TestBed.inject(SessionGuard);
  });

 //TODO: la primera pregunta de ses gran examen
  it('should be created', () => {
    expect(guard).toBeTruthy(); //todo: 
  });
});
