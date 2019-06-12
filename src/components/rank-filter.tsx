import * as React from 'react';
import { IFilterParams } from 'ag-grid-community';

import { RankType, SerializedRankFilter } from '../dto/rank';

export interface RankFilterState {
    input: string;
    select: RankType;
}

export class RankFilter extends React.Component<IFilterParams, RankFilterState> {

    private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    constructor(props: IFilterParams) {
        super(props);
        this.state = {
            select: RankType.Top,
            input: '',
        };
    }

    public isFilterActive(): boolean {
        return this.inputIsNumber();
    }

    public getModel(): SerializedRankFilter {
        if (this.state.input === '') {
            return;
        }
        return {
            filter: parseFloat(this.state.input),
            filterType: 'rank',
            type: this.state.select,
        }
    }

    public setModel(model: SerializedRankFilter): void {
        this.setState({
            select: RankType.Top,
            input: '',
        }, (): void => {
            this.props.filterChangedCallback();
        })
    }

    public afterGuiAttached(): void {
        this.inputRef.current.focus();
    }

    public render(): React.ReactNode {
        return (
            <div className='ag-filter'>
                <div>
                    <select
                        className='ag-filter-select'
                        onChange={this.onSelectChange.bind(this)}
                        value={this.state.select}
                    >
                        <option value={RankType.Top}>Top</option>
                        <option value={RankType.GreaterThan}>Greater than</option>
                        <option value={RankType.GreaterThanOrEqual}>Greater than or equal</option>                        
                    </select>
                </div>
                <div className='ag-filter-body'>
                    <div>
                        <input
                            ref={this.inputRef}
                            className='ag-filter-filter'
                            type='text'
                            placeholder='Filter...'
                            onChange={this.onInputChange.bind(this)}
                            value={this.state.input}
                        />
                    </div>
                </div>
            </div>
        );
    }

    private onSelectChange(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        this.setState({
            select: event.target.value as RankType
        }, (): void => {
            if (this.inputIsNumber()) {
                this.props.filterChangedCallback();
            }
        });
    }

    private onInputChange(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        let input: string = event.target.value;
        let clear: boolean = this.inputIsNumber() && event.target.value === '';
        this.setState({input}, (): void => {
            if (this.inputIsNumber() || clear) {
                this.props.filterChangedCallback();
            }
        });
    }

    private inputIsNumber(): boolean {
        let input = this.state.input;
        if (input === '') {
            return false;
        }
        let n: number = parseFloat(input);
        if (Number.isNaN(n)) {
            return false;
        }
        return true;
    }
}