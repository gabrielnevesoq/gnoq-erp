import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Supabase {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);
  }

  // Cadastrando novos funcionários
  async InsertPessoa(
    nome: string, cpf: string, telefone: string, email: string, 
    ctps: string, matricula: string, funcao: string, salario: number,
    filhos: string, data_admissao: Date, data_demissao: Date, cep: string, 
    logradouro: string, cidade: string, bairro: string, uf: string
  ) {
    return await this.supabase.from('tbl_pessoa').insert([{
      nome: nome, cpf: cpf, telefone: telefone, email: email,
      ctps: ctps, matricula: matricula, funcao: funcao, salario: salario,
      filhos: filhos, data_admissao: data_admissao, data_demissao: data_demissao, cep: cep,
      logradouro: logradouro, cidade: cidade, bairro: bairro, uf: uf
    }]);
  }
}