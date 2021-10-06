/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */

import { _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY } from "@angular/cdk/collections";
import { CdkTable, CDK_TABLE_TEMPLATE, STICKY_POSITIONING_LISTENER, _CoalescedStyleScheduler, _COALESCED_STYLE_SCHEDULER } from "@angular/cdk/table";
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from "@angular/core";


@Directive({
    selector: 'fx-table[recycleRows], table[fx-table][recycleRows]',
    providers: [
        { provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy },
    ],
})
export class FxRecycleRows { }

@Component({
    selector: 'fx-table, table[fx-table]',
    template: CDK_TABLE_TEMPLATE,
    exportAs: 'fxTable',
    providers: [
        { provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
        { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
        { provide: STICKY_POSITIONING_LISTENER, useValue: null }
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
})
export class FxTable<T> extends CdkTable<T> {
    protected override stickyCssClass = 'fx-table-sticky';
    protected override needsPositionStickyOnElement = false;
}