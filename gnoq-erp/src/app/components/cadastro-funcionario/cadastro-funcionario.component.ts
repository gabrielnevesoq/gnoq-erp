import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule, NgxMaskPipe, NgxMaskDirective],
  providers: [Supabase, provideNgxMask()]
})
export class CadastroFuncionarioComponent  implements OnInit {
  constructor(private alertController: AlertController, private supabase: Supabase) { }
  ngOnInit() {}

  // Criando alertas
  async CreateAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header : header,
      message: message,
    });
    await alert.present();
  }

  // Variáveis do cadastro de funcionários
  public nome     : string = "";
  public cpf      : string = "";
  public telefone : string = "";
  public email    : string = "";
  public ctps     : string = "";
  public matricula: string = "";
  public funcao   : string = "";
  public salario  : number = 0;
  public filhos   : string = "";
  public data_admissao_errada: string = "";
  public data_admissao      = new Date(this.data_admissao_errada);
  public data_demissao_errada: string = "";
  public data_demissao      = new Date(this.data_demissao_errada);
  public cep       : string = "";
  public logradouro: string = "";
  public cidade    : string = "";
  public bairro    : string = "";
  public uf        : string = "";

  // Cadastrando novos funcionários
  async InsertPessoa(
    nome: string, cpf: string, telefone: string, email: string, 
    ctps: string, matricula: string, funcao: string, salario: number,
    filhos: string, data_admissao: Date, data_demissao: Date, cep: string, 
    logradouro: string, cidade: string, bairro: string, uf: string
  ) {
    const {data, error} = await this.supabase.InsertPessoa(
      nome, cpf, telefone, email, 
      ctps, matricula, funcao, salario,
      filhos, data_admissao, data_demissao, cep, 
      logradouro, cidade, bairro, uf
    );
    if (error) {
      this.CreateAlert('🔴 Erro!', 'Ocorreu um erro ao cadastrar, tente novamente.')
    } else {
      this.CreateAlert('🟢 Cadastro Realizado!', 'Cadastro realizado com sucesso.')
    }
  }

  // Verificando se o cpf digitado é válido
  public cpfInvalido: boolean = false;
  ValidarCPF() {
    const cpfLimpo = this.cpf.replace(/\D/g, ''); // remove pontos e traço

    if (cpfLimpo.length !== 11 || /^(\d)\1+$/.test(cpfLimpo)) {
      this.cpfInvalido = true;
      return;
    }

    let soma = 0;
    let resto;

    // Valida 1º dígito
    for (let i = 1; i <= 9; i++) soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
      this.cpfInvalido = true;
      return;
    }
  }
}