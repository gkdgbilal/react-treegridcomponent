import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import { useState } from 'react';
import {
  TreeList, Editing, Column, Lookup, Button, Selection, SearchPanel
} from 'devextreme-react/tree-list';
import { workData } from './data.js';

function App() {
  const expandedRowKeys = [1, 2, 10];

  const popupOptions = {
    title: 'Work Detail',
    showTitle: true,
    width: 700,
  };

  const dataSource = [
    'Not Started',
    'Need Assistance',
    'In Progress',
    'Deferred',
    'Completed',
  ];

  const emptySelectedText = 'Nobody has been selected';
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  // const [recursive, setRecursive] = useState(true)
  const [selectedEmployeeNames, setSelectedEmployeeNames] = useState(emptySelectedText)
  // const [selectionMode, setSelectionMode] = useState("all")

  function onEditorPreparing(e) {
    if (e.dataField === 'PARENT_WORK_ID' && e.row.data.WORK_ID === 1) {
      e.editorOptions.disabled = true;
      e.editorOptions.value = null;
    }
  }

  function onInitNewRow(e) {
    console.log(e.data);
    e.data.PARENT_WORK_ID = 1;
  }
  function onSelectionChanged(e) {
    console.log(e);
    const selectedData = e.component.getSelectedRowsData("all");
    setSelectedRowKeys(e.selectedRowKeys)
    setSelectedEmployeeNames(getEmployeeNames(selectedData))
  }

  function getEmployeeNames(employeeList) {
    if (employeeList.length > 0) {
      return employeeList.map((employee) => employee.WORK_DESCRIPTION).join(', ');
    }
    return emptySelectedText;
  }

  return (
    <div id="tree-list-demo">
      <TreeList
        id="workData"
        dataSource={workData}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        showRowLines={true}
        showBorders={true}
        defaultExpandedRowKeys={expandedRowKeys}
        keyExpr="WORK_ID"
        parentIdExpr="PARENT_WORK_ID"
        onEditorPreparing={onEditorPreparing}
        onInitNewRow={onInitNewRow}
        selectedRowKeys={selectedRowKeys}
        onSelectionChanged={onSelectionChanged}
        style={{
          margin: "10px 5px"
        }}
      >
        <Editing allowUpdating={true} allowDeleting={true} allowAdding={true} popup={popupOptions} mode="popup" />
        <SearchPanel visible={true} />
        <Selection recursive={true} mode="multiple" />

        <Column minWidth={300} width={800} dataField="WORK_DESCRIPTION" />
        <Column minWidth={120} width={200} dataField="Task_Start_Date" caption="Start Date" dataType="date" />
        <Column minWidth={120} width={200} dataField="Task_End_Date" caption="End Date" dataType="date" />
        <Column minWidth={120} dataField="Task_Status" caption="Status">
          <Lookup dataSource={dataSource} />
        </Column>

        <Column type="buttons">
          <Button name="edit">
            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </Button>
          <Button name="delete">
            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </Button>
        </Column>
      </TreeList>
      {/* <TreeList
        id="tasks"
        dataSource={tasks}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        showRowLines={true}
        showBorders={true}
        defaultExpandedRowKeys={expandedRowKeys}
        keyExpr="Task_ID"
        parentIdExpr="Task_Parent_ID"
        onEditorPreparing={onEditorPreparing}
        onInitNewRow={onInitNewRow}
        selectedRowKeys={selectedRowKeys}
        onSelectionChanged={onSelectionChanged}
      >
        <Editing allowUpdating={true} allowDeleting={true} allowAdding={true} popup={popupOptions} mode="popup" />
        <SearchPanel visible={true} />
        <Selection recursive={recursive} mode="multiple" />
        
        <Column minWidth={300} dataField="Task_Subject" />
        <Column minWidth={120} dataField="Task_Assigned_Employee_ID" caption="Assigned">
          <Lookup dataSource={employees} valueExpr="ID" displayExpr="Name" />
        </Column>
        <Column minWidth={120} dataField="Task_Status" caption="Status">
          <Lookup dataSource={dataSource} />
        </Column>
        <Column dataField="Task_Start_Date" caption="Start Date" dataType="date" />
        <Column dataField="Task_Due_Date" caption="Due Date" dataType="date" />
        <Column type="buttons">
          <Button name="edit">
            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </Button>
          <Button name="delete">
            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </Button>
        </Column>
      </TreeList> */}
      <div className="options">
        <div className="selected-data">
          <span className="caption">Selected Records:</span>{' '}
          <span>
            {selectedEmployeeNames}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
