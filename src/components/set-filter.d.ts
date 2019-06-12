import * as React from 'react';
import { IFilterParams } from 'ag-grid-community';
import { Filter } from '@ytkj/ag-grid-axios';
export interface SetFilterState {
    select: string;
}
export interface SelectOption {
    key: string;
    label: string;
}
export declare function setFilterFactory(options: SelectOption[]): {
    new (props: IFilterParams): {
        getModel(): Filter;
        setModel(model: Filter): void;
        isFilterActive(): boolean;
        onSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void;
        render(): React.ReactNode;
        context: any;
        setState<K extends "select">(state: SetFilterState | ((prevState: Readonly<SetFilterState>, props: Readonly<IFilterParams>) => SetFilterState | Pick<SetFilterState, K>) | Pick<SetFilterState, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<IFilterParams> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<SetFilterState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IFilterParams>, nextState: Readonly<SetFilterState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IFilterParams>, prevState: Readonly<SetFilterState>): any;
        componentDidUpdate?(prevProps: Readonly<IFilterParams>, prevState: Readonly<SetFilterState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IFilterParams>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IFilterParams>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IFilterParams>, nextState: Readonly<SetFilterState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IFilterParams>, nextState: Readonly<SetFilterState>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
