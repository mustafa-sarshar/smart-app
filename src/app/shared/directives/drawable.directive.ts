import {
  Directive,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  OnInit,
} from "@angular/core";

@Directive({
  selector: "[appDrawable]",
})
export class DrawableDirective implements OnInit {
  @Output() newImage = new EventEmitter();
  pos = { x: 0, y: 0 };
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.canvas = this.elementRef.nativeElement as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
  }

  @HostListener("pointerup", ["$event"])
  onUp(_): void {
    this.newImage.emit(this.getImgData());
  }

  @HostListener("pointerenter", ["$event"])
  onEnter(e): void {
    this.setPosition(e);
  }

  @HostListener("pointerdown", ["$event"])
  onMove(e): void {
    this.setPosition(e);
  }

  @HostListener("pointermove", ["$event"])
  onDown(e): void {
    if (e.buttons !== 1) {
      return;
    }

    this.ctx.beginPath(); // begin

    this.ctx.lineWidth = 10;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = "#111111";

    this.ctx.moveTo(this.pos.x, this.pos.y);
    this.setPosition(e);
    this.ctx.lineTo(this.pos.x, this.pos.y);

    this.ctx.stroke();
  }

  @HostListener("resize", ["$event"])
  onResize(_): void {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  setPosition(e): void {
    this.pos.x = e.offsetX;
    this.pos.y = e.offsetY;
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  getImgData(): ImageData {
    const scaled = this.ctx.drawImage(this.canvas, 0, 0, 28, 28);
    return this.ctx.getImageData(0, 0, 28, 28);
  }
}
