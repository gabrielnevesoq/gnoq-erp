import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Supabase } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
  providers: [Supabase]
})
export class CadastroFuncionarioComponent  implements OnInit {
  constructor(private supabase: Supabase) { }
  ngOnInit() {}

  
}
