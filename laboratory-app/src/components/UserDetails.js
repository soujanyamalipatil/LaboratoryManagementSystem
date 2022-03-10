import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import axiosInstance from './axiosConfig';
import EditUsers from './EditUsers';

function UserDetails() {
    const [userData, setuserData] = useState([]);
    const [editableData, seteditableData] = useState({});
    const [showEditData, setshowEditData] = useState(false);
    useEffect(()=>{
        fetchSamples();
    },[])
const handleShow=(data)=>{
  console.log("handle show triggered")
    seteditableData(data);
    setshowEditData(true)
}
    const fetchSamples=async()=>{
        
        try{
        const url='users/users';
        const resp=await axiosInstance.get(url);
        const sampleData=await resp;
        // console.log(sampleData)
        const datad=sampleData.data
        console.log(datad)
        setuserData(datad.data);
        }catch(err){
          console.log(err)
        }
      }
  return (
    <div style={{margin:'40px'}}>
        <h4>User Details</h4>
        {console.log(userData)}
        <Table  bordered  size="sm" >
  <thead style={{backgroundColor:'lightblue'}}>
      <tr >
      <th >ID</th>
      <th>FullName</th>
      <th>Email</th>
      <th>Role</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody>
  {userData.length>0?userData.map((data)=>{
     
    return <tr key={data._id}>
      <td >{data._id}</td>
      <td>{data.fname}</td>
      <td>{data.email}</td>
      <td>{data.role}</td>
      <td><button className="btn btn-primary" data-testid="editUserBtn" onClick={()=>{handleShow(data)}}>Edit</button></td>
    </tr>
    
}):<tr><td>Loading....</td></tr>}
    
  </tbody>
</Table>
<EditUsers editableData={editableData} seteditableData={seteditableData}
showEditData={showEditData} setshowEditData={setshowEditData} fetchSamples={fetchSamples}/>
    </div>
  )
}

export default UserDetails