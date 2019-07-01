import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    Tema: 'assets/css/colors/default.css',
    TemaUrl: 'default'
  };

  // tslint:disable-next-line: deprecation
  constructor(@Inject(DOCUMENT) private document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
    }

    this.aplicarTema(this.ajustes.Tema);
  }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this.ajustes.Tema = tema;
    this.ajustes.TemaUrl = url;
    this.guardarAjustes();

    this.document.getElementById('theme').setAttribute('href', url);
  }
}

interface Ajustes {
  TemaUrl: string;
  Tema: string;
}
