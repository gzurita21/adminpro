import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() CambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  cambiarValorProgreso(valor: number) {

    if (this.progreso + valor >= 100 ) {
      this.progreso = 100;
    } else {
      if (this.progreso + valor <= 0 ) {
        this.progreso = 0;
      } else {
        this.progreso += valor;
      }
    }

    this.CambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  OnChanges(newValue: number) {

    if (newValue > 100) {
      this.progreso = 100;
    } else {
      if (newValue < 0) {
        this.progreso = 0;
      } else {
        this.progreso = newValue;
      }
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.CambioValor.emit(this.progreso);
  }
}
