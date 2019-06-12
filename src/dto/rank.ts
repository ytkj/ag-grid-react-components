import { Filter } from '@ytkj/ag-grid-axios';

export enum RankType {
    Top = 'top',
    GreaterThan = 'greaterThan',
    GreaterThanOrEqual = 'greaterThanOrEqual',
}

export interface SerializedRankFilter extends Filter {
    filter: number;
    filterType: 'rank',
    type: RankType;
}
