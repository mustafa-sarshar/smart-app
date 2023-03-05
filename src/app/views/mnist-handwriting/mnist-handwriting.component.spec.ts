import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MnistHandwritingComponent } from "./mnist-handwriting.component";

describe("MnistHandwritingComponent", () => {
  let component: MnistHandwritingComponent;
  let fixture: ComponentFixture<MnistHandwritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnistHandwritingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MnistHandwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
