import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import { ListGroup, ListGroupItem, Collapse, Table } from 'reactstrap';
import { useState } from 'react';
import { employees, wordData } from './data.js';
import {
  TreeList, Editing, Column, ValidationRule, Lookup, Button, Selection, SearchPanel
} from 'devextreme-react/tree-list';
import { CheckBox } from 'devextreme-react/check-box';
import { SelectBox } from 'devextreme-react/select-box';
import { tasks, employees1 } from "./taskData.js"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const expandedRowKeys = [1, 2, 10];

  const popupOptions = {
    title: 'Employee Info',
    showTitle: true,
    width: 700,
  };

  const lookupData = {
    store: employees,
    sort: 'Full_Name',
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
  const [recursive, setRecursive] = useState(true)
  const [selectedEmployeeNames, setSelectedEmployeeNames] = useState(emptySelectedText)
  const [selectionMode, setSelectionMode] = useState("all")

  const data = [
    {
      "WORK_ID": "1",
      "PARENT_WORK_ID": "Null",
      "WORK_DESCRIPTION": "Faz 1"
    },
    {
      "WORK_ID": "2",
      "PARENT_WORK_ID": "Null",
      "WORK_DESCRIPTION": "Faz 2"
    },
    {
      "WORK_ID": "3",
      "PARENT_WORK_ID": "1",
      "WORK_DESCRIPTION": "Analiz"
    },
    {
      "WORK_ID": "4",
      "PARENT_WORK_ID": "1",
      "WORK_DESCRIPTION": "Sistem Kurulumları"
    },
    {
      "WORK_ID": "5",
      "PARENT_WORK_ID": "1",
      "WORK_DESCRIPTION": "Uyarlamalar"
    },
    {
      "WORK_ID": "6",
      "PARENT_WORK_ID": "1",
      "WORK_DESCRIPTION": "Geliştirmeler"
    },
    {
      "WORK_ID": "7",
      "PARENT_WORK_ID": "3",
      "WORK_DESCRIPTION": "Müşteriyle Toplantı 1"
    },
    {
      "WORK_ID": "8",
      "PARENT_WORK_ID": "3",
      "WORK_DESCRIPTION": "Toplantı Değerlendirme"
    },
    {
      "WORK_ID": "9",
      "PARENT_WORK_ID": "3",
      "WORK_DESCRIPTION": "Müşteriyle Toplantı 2"
    },
    {
      "WORK_ID": "10",
      "PARENT_WORK_ID": "6",
      "WORK_DESCRIPTION": "SRM Geliştirmeleri"
    },
    {
      "WORK_ID": "11",
      "PARENT_WORK_ID": "10",
      "WORK_DESCRIPTION": "Talep Geliştirmeleri"
    },
    {
      "WORK_ID": "12",
      "PARENT_WORK_ID": "11",
      "WORK_DESCRIPTION": "Ana Hesap Belirleme"
    },
    {
      "WORK_ID": "13",
      "PARENT_WORK_ID": "11",
      "WORK_DESCRIPTION": "Acil Alım Süreci"
    },
    {
      "WORK_ID": "14",
      "PARENT_WORK_ID": "11",
      "WORK_DESCRIPTION": "Talep Aktarımı"
    },
    {
      "WORK_ID": "15",
      "PARENT_WORK_ID": "11",
      "WORK_DESCRIPTION": "Talepte Katalog"
    },
    {
      "WORK_ID": "16",
      "PARENT_WORK_ID": "11",
      "WORK_DESCRIPTION": "Talep Mailleri"
    },
    {
      "WORK_ID": "17",
      "PARENT_WORK_ID": "10",
      "WORK_DESCRIPTION": "İhale-Teklif Geliştirmeleri"
    },
    {
      "WORK_ID": "18",
      "PARENT_WORK_ID": "17",
      "WORK_DESCRIPTION": "Teklif Karşılaştırma"
    },
    {
      "WORK_ID": "19",
      "PARENT_WORK_ID": "17",
      "WORK_DESCRIPTION": "Adobe Form"
    },
    {
      "WORK_ID": "20",
      "PARENT_WORK_ID": "17",
      "WORK_DESCRIPTION": "Malzeme Tekilleştirme"
    },
    {
      "WORK_ID": "21",
      "PARENT_WORK_ID": "17",
      "WORK_DESCRIPTION": "Teklif Excel Up/Download"
    },
    {
      "WORK_ID": "22",
      "PARENT_WORK_ID": "10",
      "WORK_DESCRIPTION": "Sipariş Geliştirmeleri"
    },
    {
      "WORK_ID": "23",
      "PARENT_WORK_ID": "22",
      "WORK_DESCRIPTION": "Otomatik SAS"
    },
    {
      "WORK_ID": "24",
      "PARENT_WORK_ID": "22",
      "WORK_DESCRIPTION": "Sipariş Mailleri"
    },
    {
      "WORK_ID": "25",
      "PARENT_WORK_ID": "22",
      "WORK_DESCRIPTION": "Sipariş Portali"
    },
    {
      "WORK_ID": "26",
      "PARENT_WORK_ID": "22",
      "WORK_DESCRIPTION": "ERP ye SAS Aktarımı"
    },
    {
      "WORK_ID": "27",
      "PARENT_WORK_ID": "10",
      "WORK_DESCRIPTION": "ERP yerımı"
    }
  ];

  const TreeList1 = (props) => {
    return (
      <ListGroup
        style={{
          margin: "1rem",
        }}
      >
        <ListGroupItem>
          {
            data.map((dat, i) => (
              <ul style={{ listStyleType: "none" }}
                key={i}
              >
                <li>
                  <Table>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <input class="form-check-input me-1" type="checkbox" value=""></input>
                        </th>
                        <td>
                          {dat.WORK_DESCRIPTION}
                        </td>
                        <td>
                          Expand / Collapse
                        </td>
                        <td>
                          + Add
                        </td>
                        <td>
                          Start / End Date
                        </td>
                        <td>
                          Responsibles
                        </td>
                        <td>
                          Status
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  {
                    props.id === dat.PARENT_WORK_ID ?
                      <TreeList id={dat.WORK_ID} name={dat.WORK_DESCRIPTION} /> : <div></div>
                  }
                </li>
              </ul>
            ))
          }
        </ListGroupItem>
      </ListGroup>
    )
  }

  function onEditorPreparing(e) {
    if (e.dataField === 'Head_ID' && e.row.data.ID === 1) {
      e.editorOptions.disabled = true;
      e.editorOptions.value = null;
    }
  }

  function onInitNewRow(e) {
    e.data.Head_ID = 1;
  }
  function onSelectionChanged(e) {
    const selectedData = e.component.getSelectedRowsData(selectionMode);
    setSelectedRowKeys(e.selectedRowKeys)
    setSelectedEmployeeNames(getEmployeeNames(selectedData))
  }

  function onRecursiveChanged(e) {
    setRecursive(e.value)
    setSelectedRowKeys([])
    setSelectedEmployeeNames(emptySelectedText)
  }

  function onSelectionModeChanged(e) {
    setSelectionMode(e.value)
    setSelectedRowKeys([])
    setSelectedEmployeeNames(emptySelectedText)
  }

  function getEmployeeNames(employeeList) {
    if (employeeList.length > 0) {
      return employeeList.map((employee) => employee.Full_Name).join(', ');
    }
    return emptySelectedText;
  }

  return (
    // <div>
    //   <Button
    //     color="primary"
    //     onClick={() => setIsOpen(!isOpen)}
    //     style={{
    //       margin: '1rem'
    //     }}
    //   >
    //     Toggle
    //   </Button>
    //   <Collapse isOpen={true}>
    //     <TreeList />
    //   </Collapse>

    // </div>
    <div id="tree-list-demo">
      <TreeList
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
            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </Button>
          <Button name="delete">
            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </Button>
        </Column>
      </TreeList>
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
