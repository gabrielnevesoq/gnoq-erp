import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CadastroFuncionarioComponent } from '../components/cadastro-funcionario/cadastro-funcionario.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CadastroFuncionarioComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
