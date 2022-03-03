import React, { useEffect, useState } from 'react'
import { Button,Modal, Table } from 'react-bootstrap'
import SearchBar from './SearchBar';

function SampleReportDetails() {
    // const [filtered, setfiltered] = useState([]);
    const [sortToggle,setSortToggle]=useState(true)
    const [sampledetailsdata, setsampledetailsdata] = useState([]);
    const [copySampleDetails, setcopySampleDetails] = useState([]);
    const [show, setShow] = useState(false);
    const [haemotology, sethaemotology] = useState();
   let i=1;
  const handleClose = () => setShow(false);
  const handleShow = async(haemotologyData) => {
      console.log(haemotologyData)
       await sethaemotology(haemotologyData);
      setShow(true)
      
    }
    const handleSort=()=>{
if (sortToggle) {
  let sorted = sampledetailsdata.sort((a, b) =>  toTimestamp(a.date) -  toTimestamp(b.date));
  console.log(sorted);
  setSortToggle(!sortToggle);
  setsampledetailsdata([...sorted]);
}else{
  let sorted = sampledetailsdata.sort((a, b) =>  toTimestamp(b.date) -  toTimestamp(a.date));
  console.log(sorted);
  setSortToggle(!sortToggle);
  setsampledetailsdata([...sorted]);
}      
    }
console.log(sampledetailsdata)
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
       setcopySampleDetails(datad);
        }catch(err){
          console.log(err)
        }
      }
      console.log(sampledetailsdata)

      const toTimestamp =(item)=>{
      let dt=Date.parse(item)
      return dt/1000;
      } 
      
  return (
    <div>
        <div>
       <div style={{textAlign:'left',marginTop:'20px'}}>    
    <SearchBar sampledetailsdata={sampledetailsdata} setsampledetailsdata={setsampledetailsdata} copySampleDetails={copySampleDetails}/>
    </div>
   
    <button style={{position:'relative',right:'480px',top:'20px'}} className="btn btn-primary" onClick={handleSort}>SortByDate</button>
        </div>
        <h3>Sample Details</h3>
        <Table  bordered  size="sm" variant='light'>
  <thead >
      <tr >
      <th >Date</th>
      <th>Patient Name</th>
      <th>Email Id</th>
      <th>Sample Id</th>
      <th>Haemotology</th>
      <th>Thyroid</th>
      <th>Glucometry</th>
    </tr>
  </thead>
  <tbody>
  {sampledetailsdata.length>0?sampledetailsdata.map((data)=>{
      {var datev=new Date(data.date)}
    return <tr key={data._id}>
      <td >{datev.toISOString().substring(0,10)}</td>
      <td>{data.pname}</td>
      <td>{data.email}</td>
      <td>{data.sampleId}</td>
      <td>{data.haemotologyStatus==='view'?<button className="btn btn-primary" onClick={()=>{handleShow(data.haemotology)}}>viewdetails</button>:data.haemotologyStatus==='pending'?<button className="btn btn-info" >AddReport</button>:<button className="btn " disabled>NA</button>}</td>
      <td>{data.thyroidStatus==='view'?<button className="btn btn-primary" onClick={()=>{handleShow(data.thyroid)}}>viewdetails</button>:data.thyroidStatus==='pending'?<button className="btn btn-info" >AddReport</button>:<button className="btn " disabled>NA</button>}</td>
      <td>{data.glucometryStatus==='view'?<button className="btn btn-primary" onClick={()=>{handleShow(data.glocometry)}}>viewdetails</button>:data.glucometryStatus==='pending'?<button className="btn btn-info" >AddReport</button>:<button className="btn " disabled>NA</button>}</td>
    </tr>
}):<tr><td>Loading</td></tr>}
    
  </tbody>
</Table>
<>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report Data </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <Table  bordered >
  <thead>
    <tr>
      <th>Test Name</th>
      <th>Results</th>
    </tr>
  </thead>
  <tbody>
      {haemotology? Object.keys(haemotology).map((key)=>{
     return <tr key={i=i+1}>
      <td>{key}</td>
      <td>{haemotology[key]}</td>
    </tr>
}):<tr><td>no data available</td></tr>}

  </tbody>
</Table>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default SampleReportDetails