import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuizComponent } from "./quiz/quiz.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "quiz", pathMatch: "full" },
  { path: "quiz", component: QuizComponent },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
})
export class AppRoutingModule {}
export const RoutingComponents = [QuizComponent, DashboardComponent];
