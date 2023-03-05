import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomePageComponent } from "./views/welcome-page/welcome-page.component";
import { LinearRegressionComponent } from "./views/linear-regression/linear-regression.component";
import { MnistHandwritingComponent } from "./views/mnist-handwriting/mnist-handwriting.component";

const routes: Routes = [
  { path: "welcome", component: WelcomePageComponent },
  { path: "linear-regression", component: LinearRegressionComponent },
  { path: "mnist-handwriting", component: MnistHandwritingComponent },
  { path: "**", redirectTo: "/welcome", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
