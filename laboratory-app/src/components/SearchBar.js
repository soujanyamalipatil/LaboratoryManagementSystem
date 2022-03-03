import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

function SearchBar({sampledetailsdata,setsampledetailsdata,copySampleDetails}) {
    
   const [search, setsearch] = useState();
   const [data, setdata] = useState()
    const handleSearch = (e) => {
        setsearch(e.target.value)
    }
    
    let searchReasults = copySampleDetails.filter((item) => {
        console.log(item._id, "id");
        console.log(search, "search");
        if (item.pname.includes(search) || item.email.includes(search)) {
            return item
        }
    })
    console.log(searchReasults)
    useEffect(() => {
        setsampledetailsdata(searchReasults) 
    }, [search])
  return (
    <div>
        {/* <input onKeyDown={handleSearch} placeholder='Search Here' /> */}
        {/* <button color='red'>search</button> */}
        <div className='col-4'>
        <FloatingLabel controlId="floatingInputGrid" label="Search Here">
      <Form.Control type="text" placeholder="Seach Here" size='xxs' onKeyDown={handleSearch}/>
    </FloatingLabel>
        </div>
    </div>
  )
}

export default SearchBar