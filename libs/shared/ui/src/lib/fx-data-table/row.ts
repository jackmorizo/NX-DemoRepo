/* eslint-disable @angular-eslint/no-inputs-metadata-property */
/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */

import {
    CDK_ROW_TEMPLATE,
    CdkFooterRow,
    CdkFooterRowDef,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkRow,
    CdkRowDef,
    CdkNoDataRow
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

/****************************************************************************
 * Row-Definition Directives
 ****************************************************************************/
@Directive({
    selector: '[fxRowDef]',
    providers: [{ provide: CdkRowDef, useExisting: FxRowDef }],
    inputs: ['columns: fxRowDefColumns', 'when: fxRowDefWhen'],
})
export class FxRowDef<T> extends CdkRowDef<T> { }

@Directive({
    selector: '[fxHeaderRowDef]',
    providers: [{ provide: CdkHeaderRowDef, useExisting: FxHeaderRowDef }],
    inputs: ['columns: fxHeaderRowDef', 'sticky: fxHeaderRowDefSticky'],
})
export class FxHeaderRowDef extends CdkHeaderRowDef { }

@Directive({
    selector: '[fxFooterRowDef]',
    providers: [{ provide: CdkFooterRowDef, useExisting: FxFooterRowDef }],
    inputs: ['columns: fxFooterRowDef', 'sticky: fxFooterRowDefSticky'],
})
export class FxFooterRowDef extends CdkFooterRowDef { }


/****************************************************************************
 * Row Components
 ****************************************************************************/
@Component({
    selector: 'fx-row, tr[fx-row]',
    template: CDK_ROW_TEMPLATE,
    host: {
        'class': 'fx-row',
        'role': 'row',
    },
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'fxRow',
    providers: [{ provide: CdkRow, useExisting: FxRow }],
})
export class FxRow extends CdkRow { }

@Component({
    selector: 'fx-header-row, tr[fx-header-row]',
    template: CDK_ROW_TEMPLATE,
    host: {
        'class': 'fx-header-row',
        'role': 'row',
    },
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'fxHeaderRow',
    providers: [{ provide: CdkHeaderRow, useExisting: FxHeaderRow }],
})
export class FxHeaderRow extends CdkHeaderRow { }

@Component({
    selector: 'fx-footer-row, tr[fx-footer-row]',
    template: CDK_ROW_TEMPLATE,
    host: {
        'class': 'fx-footer-row',
        'role': 'row',
    },
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'fxFooterRow',
    providers: [{ provide: CdkFooterRow, useExisting: FxFooterRow }],
})
export class FxFooterRow extends CdkFooterRow { }


/****************************************************************************
 * Empty-Data Directive
 ****************************************************************************/
@Directive({
    selector: 'ng-template[fxNoDataRow]',
    providers: [{ provide: CdkNoDataRow, useExisting: FxNoDataRow }],
})
export class FxNoDataRow extends CdkNoDataRow { }