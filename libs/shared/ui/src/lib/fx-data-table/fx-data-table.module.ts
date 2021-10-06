import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';


import { FxRecycleRows, FxTable } from './table';
import {
    FxCell,
    FxCellDef,
    FxColumnDef,
    FxFooterCell,
    FxFooterCellDef,
    FxHeaderCell,
    FxHeaderCellDef,
} from './cell';

import {
    FxFooterRow,
    FxFooterRowDef,
    FxHeaderRow,
    FxHeaderRowDef,
    FxRow,
    FxRowDef,
    FxNoDataRow
} from './row';


const DECLARATIONS = [

    // Tables
    FxTable,
    FxRecycleRows,

    // Template defs
    FxHeaderCellDef,
    FxHeaderRowDef,
    FxColumnDef,
    FxCellDef,
    FxRowDef,
    FxFooterCellDef,
    FxFooterRowDef,

    // Cell directives
    FxHeaderCell,
    FxCell,
    FxFooterCell,

    // Row directives
    FxHeaderRow,
    FxRow,
    FxFooterRow,
    FxNoDataRow
];

@NgModule({
    imports: [
        CdkTableModule, CommonModule
    ],
    exports: [
        DECLARATIONS
    ],
    declarations: DECLARATIONS,
    providers: []
})
export class FxDataTableModule { }