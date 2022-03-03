import { fireEvent, render } from '@testing-library/react';
import UserDetails from './UserDetails';

describe("user Details Edit button",()=>{
    it("user btn render",()=>{
        let {queryByTitle}=render(<UserDetails/>)
        let btn=queryByTitle('editUserDetails')
        console.log(btn)
        // expect(btn).toBeTruthy()
    })

    it("onClick",()=>{
        let {queryByTitle} = render(<UserDetails />)
        let btn = queryByTitle("editUserDetails")
        console.log(btn);
        // fireEvent.click(btn)
        
    })
})
