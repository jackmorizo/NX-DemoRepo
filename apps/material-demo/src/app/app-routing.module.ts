import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDataTablesExampleComponent } from './custom-data-tables-example/custom-data-tables-example.component';
import { DataTablesExampleComponent } from './data-tables-example/data-tables-example.component';

const routes: Routes = [
    { 'path': 'datatables', component: DataTablesExampleComponent },
    { 'path': 'customtables', component: CustomDataTablesExampleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }