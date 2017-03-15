
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppApplicationComponent } from './appstore/app-application.component';

const routes: Routes = [
    { path: ``, redirectTo: `/appstore`, pathMatch: `full` },
    { path: 'appstore', component: AppApplicationComponent },
    // { path: 'appstore/:id', component: AppApplicationComponent },
];

@NgModule(
    {
        //imports: [RouterModule.forRoot(routes, { useHash: true })],
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRoutingModule {
}
