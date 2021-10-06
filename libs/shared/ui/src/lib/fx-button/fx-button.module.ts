import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FxButtonComponent } from "./fx-button.component";
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule.forRoot()
    ],
    declarations: [FxButtonComponent],
    exports: [FxButtonComponent],
    providers: []
})
export class FxButtonModule { }