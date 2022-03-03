import React, { useEffect, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
// let rowdata;
// const rows: GridRowsProp= rowdata.length>0?rowdata.map((data)=>{
//  return { id: data._id, col1: data.pname, col2: data.email,col3:data.sampleId,col4:data.haemotology,col5:data.thyroid,col6:data.glocometry }
// }):'data'

let displaybuttondata;
const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Date', width: 150 },
  { field: 'col2', headerName: 'Patient Name', width: 150 },
  { field: 'col3', headerName: 'EmailID', width: 150 },
  { field: 'col4', headerName: 'SampleID', width: 150 },
  { field: 'col5', headerName: 'Haemotology', width: 150 ,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          // // onClick={(event) => {
          // //   handleClick(event, cellValues);
          // }}
        >
          {displaybuttondata}
        </Button>
      );
    }
  },
  { field: 'col6', headerName: 'Thyroid', width: 150 },
  { field: 'col7', headerName: 'Glocometry', width: 150 }
];

export default function SampleDetails() {
  const [sampledetailsdata, setsampledetailsdata] = useState([]);
  const [rows, setrows] = useState();
  const [haemotology, sethaemotology] = useState();
  useEffect(()=>{
    fetchSamples();
  },[])
  
  const fetchSamples=async()=>{
    try{
    const url='http://localhost:4000/samples/samples';
    const resp=await fetch(url);
    // console.log(resp.json());
    const sampleData=await resp.json();
    const datad=sampleData.data
    setsampledetailsdata(datad);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div style={{ height: 300, width: '100%' }}>

      <DataGrid rows={sampledetailsdata.length>0?sampledetailsdata.map((rowdata,key)=>{
          return {id:rowdata._id,col1:rowdata.date,col2:rowdata.pname,col3: rowdata.email,col4:rowdata.sampleId,col5:rowdata.haemotology!=null?'viewD':'NA',col6:rowdata.thyroid,col7:rowdata.glocometry}
      }):''} columns={columns} />
    </div>
  );
}