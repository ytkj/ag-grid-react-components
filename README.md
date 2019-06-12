# ag-grid-react-components
AgGrid framework components for React, powered by TypeScript.

## Installation

1. `npm install -S ag-grid-react-components`

## Usage

### RankFilter

1. import `RankFilter`

  ```typescript
  import { RankFilter } from 'ag-grid-react-components'
  ```

1. set `RankFilter` to `columnDef.filterFramework`
  
  ```tsx
  <AgGridReact
      columnDefs={[
          {
              field: 'field1',
              headerName: 'Rank Filter',
              filterFramework: RankFilter,
          },
      ]}
      {...props}
  />
  ``` 


### SetFilter

1. import `setFilterFactory`

  ```typescript
  import { setFilterFactory } from 'ag-grid-react-components'
  ```
    
1. create `SetFilter` by `setFilterFactory()` and set it to `columnDef.filterFramework`

  ```tsx
  <AgGridReact
      columnDefs={[
          {
              field: 'field2',
              headerName: 'Set Filter',
              filterFramework: setFilterFactory([
                  {key: '', label: ''},
                  {key: 'a', label: 'A'},
                  {key: 'b', label: 'B'},
                  {key: 'c', label: 'C'},
              ]),
          },
      ]}
      {...props}
  />
  ```

## Test

1. `git clone https://github.com/ytkj/ag-grid-react-components.git`
1. `cd ag-grid-react-components`
1. `npm install`
1. `npm test`
1. open http://localhost:3000 in your browser.
