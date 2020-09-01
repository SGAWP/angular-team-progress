import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'people/1', pathMatch: 'full' },
            {
                path: "people/:id",
                loadChildren: () => import("./people/people.module").then(m => m.PeopleModule)
            },
            {
                path: "**",
                loadChildren: () => import("./not-found/not-found.module").then(m => m.NotFoundModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: environment.useHash
        })
    ],
    exports: [RouterModule]
})
export class RoutesRoutingModule { }