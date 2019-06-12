import * as React from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { setFilterFactory, RankFilter } from '../';
import { FilterChangedEvent } from 'ag-grid-community';

interface TestState {
    message: string;
}

class Test extends React.Component<{}, TestState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            message: '{}',
        }
    }

    public render(): React.ReactNode {
        return (
            <div style={{padding: 10}}>
                <h2>Grid</h2>
                <p>change filter condition. (no data in this grid)</p>
                <div className='ag-theme-balham' style={{height: 100, width: '100%'}}>
                    <AgGridReact
                        columnDefs={[
                            {
                                headerName: 'Rank Filter',
                                field: 'field1',
                                filterFramework: RankFilter,
                            },
                            {
                                headerName: 'Set Filter',
                                field: 'field2',
                                filterFramework: setFilterFactory([
                                    {key: '', label: ''},
                                    {key: 'A', label: 'A'},
                                    {key: 'B', label: 'B'},
                                    {key: 'C', label: 'C'},
                                ])
                            },
                        ]}
                        rowData={[]}
                        onFilterChanged={this.handleFilterChange.bind(this)}
                    />
                </div>
                <h2>Filter Model</h2>
                <pre style={{padding: '10px 30px'}}>{this.state.message}</pre>
            </div>
        )
    }

    private handleFilterChange(event: FilterChangedEvent): void {
        let message = JSON.stringify(event.api.getFilterModel(), null, 4);
        this.setState({
            message,
        });
    }
}

render(
    <Test />,
    document.getElementById('app'),
);
