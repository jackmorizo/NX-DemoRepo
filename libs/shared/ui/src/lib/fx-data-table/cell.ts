/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */

import { Directive, Input } from "@angular/core";
import {
    CdkCell,
    CdkCellDef,
    CdkColumnDef, CdkFooterCell, CdkFooterCellDef,
    CdkHeaderCell,
    CdkHeaderCellDef,
} from '@angular/cdk/table';


/****************************************************************************
 * Column-Definition Directives
 ****************************************************************************/
@Directive({
    selector: '[fxCellDef]',
    providers: [{ provide: CdkCellDef, useExisting: FxCellDef }]
})
export class FxCellDef extends CdkCellDef { }

@Directive({
    selector: '[fxHeaderCellDef]',
    providers: [{ provide: CdkHeaderCellDef, useExisting: FxHeaderCellDef }]
})
export class FxHeaderCellDef extends CdkHeaderCellDef { }

@Directive({
    selector: '[fxFooterCellDef]',
    providers: [{ provide: CdkFooterCellDef, useExisting: FxFooterCellDef }]
})
export class FxFooterCellDef extends CdkFooterCellDef { }

@Directive({
    selector: '[fxColumnDef]',
    inputs: ['sticky'],
    providers: [
        { provide: CdkColumnDef, useExisting: FxColumnDef },
        { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: FxColumnDef }
    ],
})
export class FxColumnDef extends CdkColumnDef {
    @Input('fxColumnDef')
    override get name(): string { return this._name; }
    override set name(name: string) { this._setNameInput(name); }

    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    protected override _updateColumnCssClassName() {
        super._updateColumnCssClassName(); // remove to remove cdk-column- prefix
        this._columnCssClassName!.push(`fx-column-${this.cssClassFriendlyName}`);
    }
}


/****************************************************************************
 * Table-Cell Directives
 ****************************************************************************/
@Directive({
    selector: 'fx-cell, td[fx-cell]',
    host: {
        'class': 'fx-cell',
        'role': 'gridcell'
    }
})
export class FxCell extends CdkCell { }

@Directive({
    selector: 'fx-header-cell, th[fx-header-cell]',
    host: {
        'class': 'fx-headercell',
        'role': 'columnheader'
    }
})
export class FxHeaderCell extends CdkHeaderCell { }

@Directive({
    selector: 'fx-footer-cell, td[fx-footer-cell]',
    host: {
        'class': 'fx-footercell',
        'role': 'gridcell'
    }
})
export class FxFooterCell extends CdkFooterCell { }