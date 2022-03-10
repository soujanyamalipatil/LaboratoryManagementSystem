import AdminLogin from './AdminLogin';
import { fireEvent,queryByTestId,render } from '@testing-library/react';
import { screen } from '@testing-library/dom';


describe("Login button",()=>{
    it("login button render",()=>{
        let {queryByTitle} = render(<AdminLogin />)
        let btn = queryByTitle("loginBtn")
        expect(btn).toBeTruthy()
    })

    it("onSubmit",()=>{
        let {queryByTitle} = render(<AdminLogin />)
        let btn = queryByTitle("loginBtn")
        fireEvent.submit(btn)
        
    })
})
describe("input field test",()=>{
    it("login render",()=>{
        let {getByTestId}=render (<AdminLogin />)
        // let input = queryByTitle("email")
        let contentInput = screen.getByTestId("content-email").querySelector('input');
        fireEvent.change(contentInput, {
        target: { value: "new content" }
});

        expect(contentInput).toBeTruthy()
    })
    
    it("login render",()=>{
        let {queryByTitle}=render (<AdminLogin />)
        let input = queryByTitle("password")
        expect(input).toBeTruthy()
    })

    it("login render",()=>{
        let {queryByTitle}=render (<AdminLogin />)
        let input = queryByTitle("email")
        expect(input).toBeTruthy()
    })
    

    it("login render",()=>{
        let {getByTestId}=render (<AdminLogin />)
        // let input = queryByTitle("email")
        let contentInput = screen.getByTestId("content-password").querySelector('input');
        fireEvent.change(contentInput, {
        target: { value: "new content" }
});

        expect(contentInput).toBeTruthy()
    })


})

