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

export function setFilterFactory(options: SelectOption[]) {

    return class SetFilter extends React.Component<IFilterParams, SetFilterState> {
        
        constructor(props: IFilterParams) {
            super(props);
            this.state = {
                select: '',
            };
        }

        public getModel(): Filter {
            if (this.state.select === '') {
                return;
            }
            return {
                type: 'equals',
                filter: this.state.select,
                filterType: 'text',
            };
        }

        public setModel(model: Filter): void {
            this.setState({
                select: '',
            }, (): void => {
                this.props.filterChangedCallback();
            });
        }

        public isFilterActive(): boolean {
            return this.state.select !== '';
        }

        public onSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void {
            this.setState({
                select: event.target.value,
            }, (): void => {
                this.props.filterChangedCallback();
            });
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
                            {options.map(option => (
                                <option value={option.key} key={option.key}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )
        }
    }
}
