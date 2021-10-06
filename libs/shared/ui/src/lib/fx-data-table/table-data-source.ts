/* eslint-disable @typescript-eslint/no-empty-function */
import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';

import {
    BehaviorSubject,
    combineLatest,
    merge,
    Observable,
    of as observableOf,
    Subject,
    Subscription,
} from 'rxjs';


export interface FxTableDataSourcePageEvent {
    pageIndex: number;
    pageSize: number;
    length: number;
}

export interface FxTableDataSourcePaginator {
    page: Subject<FxTableDataSourcePageEvent>;
    pageIndex: number;
    initialized: Observable<void>;
    pageSize: number;
    length: number;
}


export class FxTableDataSource<T> extends DataSource<T> {

    /** Stream that emits when a new data array is set on the data source. */
    private readonly _data: BehaviorSubject<T[]>;

    get data() { return this._data.value; }
    set data(data: T[]) {
        this._data.next(data);
    }

    constructor(initData: T[] = []) {
        super();
        this._data = new BehaviorSubject<T[]>(initData);
    }

    connect(): Observable<readonly T[]> {
        return this._data;
    }
    disconnect() { }

}