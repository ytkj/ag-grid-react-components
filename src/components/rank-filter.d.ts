import * as React from 'react';
import { IFilterParams } from 'ag-grid-community';
import { RankType, SerializedRankFilter } from '../dto/rank';
export interface RankFilterState {
    input: string;
    select: RankType;
}
export declare class RankFilter extends React.Component<IFilterParams, RankFilterState> {
    private inputRef;
    constructor(props: IFilterParams);
    isFilterActive(): boolean;
    getModel(): SerializedRankFilter;
    setModel(model: SerializedRankFilter): void;
    afterGuiAttached(): void;
    render(): React.ReactNode;
    private onSelectChange;
    private onInputChange;
    private inputIsNumber;
}
