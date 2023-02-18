/*-------------------[Import Three Js]---------------------*/
import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
/*---------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { ErrorComponent } from './error/error.component';
import { LogoComponent } from './3D-Component/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPreviewComponent,
    ProductComponent,
    NavbarComponent,
    OffreEmploiComponent,
    ErrorComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
