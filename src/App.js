import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Filter } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './datasource';
import './App.css';

function App() {
  return (
    <TreeGridComponent dataSource={summaryData}
      childMapping="subtask"
      treeColumnIndex={1}
      allowPaging={true}
      allowSorting={true}
      allowFiltering={true}
    >
      <Inject services={[Page, Sort, Filter]} />
      <ColumnsDirective>
        <ColumnDirective field="ID" headerText="ID" width="90" textAlign="Right">
        </ColumnDirective>
        <ColumnDirective field="Name" headerText="Name">
        </ColumnDirective>
        <ColumnDirective field="category" headerText="Category">
        </ColumnDirective>
        <ColumnDirective field="units" headerText="Units">
        </ColumnDirective>
        <ColumnDirective field="unitPrice" headerText="Unit Price">
        </ColumnDirective>
        <ColumnDirective field="price" headerText="Price" format="C2">
        </ColumnDirective>
      </ColumnsDirective>
    </TreeGridComponent>
  );
}

export default App;
