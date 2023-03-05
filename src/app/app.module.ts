import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DialogModule } from "@angular/cdk/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgChartsModule } from "ng2-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppMaterialModule } from "./app-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { LinearRegressionComponent } from "./views/linear-regression/linear-regression.component";
import { NavMainComponent } from "./shared/ui-gadgets/nav-main/nav-main.component";
import { LoadingSpinnerComponent } from "./shared/ui-gadgets/loading-spinner/loading-spinner.component";
import { WelcomePageComponent } from "./views/welcome-page/welcome-page.component";
import { MnistHandwritingComponent } from "./views/mnist-handwriting/mnist-handwriting.component";
import { DrawableDirective } from "./shared/directives/drawable.directive";
import { ChartComponent } from "./shared/ui-gadgets/chart/chart.component";

@NgModule({
  declarations: [
    AppComponent,
    LinearRegressionComponent,
    NavMainComponent,
    LoadingSpinnerComponent,
    WelcomePageComponent,
    MnistHandwritingComponent,
    DrawableDirective,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
