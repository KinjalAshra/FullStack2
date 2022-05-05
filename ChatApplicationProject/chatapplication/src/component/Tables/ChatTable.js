import React, { useState, useEffect } from "react";
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 250  },
  { field: 'socketId', headerName: 'SocketId', width: 250 },
  { field: 'chat', headerName: 'Chat', width: 250 },
  { field: 'timestamp', headerName: 'Timestamp', width: 250 }
]

function ChatTable() {

    const [tableData, setChatTableData] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:8080/fetchdatafrommongooseforchat")
        .then((data) => data.json())
        .then((data) => setChatTableData(data))
    }, [])
    console.log(tableData)
  
    return (
      <div style={{ height: 500, width: '100%' }}>
        <h1>Chat History</h1>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={12}
          getRowId={(row)=>row._id}
        />
      </div>
    )
  }
export default ChatTable;