import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [PublicComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
