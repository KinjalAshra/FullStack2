import React, { useState, useEffect } from "react";
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 250  },
  { field: 'socketId', headerName: 'SocketId', width: 250 },
  { field: 'eventName', headerName: 'EventName', width: 250 },
  { field: 'eventDesc', headerName: 'EventDesc', width: 250 },
  { field: 'timestamp', headerName: 'Timestamp', width: 250 }
]

function EventTable() {

    const [tableData, setEventTableData] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:8080/fetchdatafrommongooseforevent")
        .then((data) => data.json())
        .then((data) => setEventTableData(data))
    }, [])
    console.log(tableData)
  
    return (
      <div style={{ height: 500, width: '100%' }}>
        <h1>Event History</h1>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={12}
          getRowId={(row)=>row._id}
        />
      </div>
    )
  }
export default EventTable;