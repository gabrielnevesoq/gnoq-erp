import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}

  // Controle: Departamento Pessoal - Cadastro de funcionário
  public cadastro_pessoa: 'aberto' | 'fechado' = 'fechado';
  public AbrirCadastroPessoa() {
    this.cadastro_pessoa = 'aberto';
  }
  public FecharCadastroPessoa() {
      this.cadastro_pessoa = 'fechado';
  }
}