import { fireEvent,queryByTestId, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import RegisterPage from './RegisterPage';

describe("register button",()=>{
    it("register btn render",()=>{
        let {queryByTitle}=render(<RegisterPage/>)
        let btn=queryByTitle('registerBtn')
        expect(btn).toBeTruthy()
    })

    it("onSubmit",()=>{
        let {queryByTitle} = render(<RegisterPage />)
        let btn = queryByTitle("registerBtn")
        fireEvent.submit(btn)
        
    })
})

describe("register field text",()=>{
    it("register render",()=>{
        let {queryByTitle}=render (<RegisterPage />)
        let input = queryByTitle("fname")
        expect(input).toBeTruthy()
    })
    
    it("register render",()=>{
        let {getByTestId}=render (<RegisterPage />)
       
        let contentInput = screen.getByTestId("content-name").querySelector('input');
fireEvent.change(contentInput, {
  target: { value: "new content" }
});

        expect(contentInput).toBeTruthy()
    })

    it("register render",()=>{
        let {queryByTitle}=render (<RegisterPage />)
        let input = queryByTitle("email")
        expect(input).toBeTruthy()
    })

    it("register render",()=>{
        let {getByTestId}=render (<RegisterPage />)
        // let input = queryByTitle("email")
        let contentInput = screen.getByTestId("content-email").querySelector('input');
fireEvent.change(contentInput, {
  target: { value: "new content" }
});

        expect(contentInput).toBeTruthy()
    })

    it("register render",()=>{
        let {queryByTitle}=render (<RegisterPage />)
        let input = queryByTitle("password")
        expect(input).toBeTruthy()
    })

    it("register render",()=>{
        let {getByTestId}=render (<RegisterPage />)
        let contentInput = screen.getByTestId("content-password").querySelector('input');
fireEvent.change(contentInput, {
  target: { registervalue: "new content" }
});

        expect(contentInput).toBeTruthy()
    })

    it(" register render",()=>{
        let {queryByTitle}=render (<RegisterPage />)
        let input = queryByTitle("role")
        expect(input).toBeTruthy()
    })

    it("register render",()=>{
        let {getByTestId}=render (<RegisterPage />)
        // let input = queryByTitle("email")
        let contentInput = screen.getByTestId("content-role").querySelector('input');
fireEvent.change(contentInput, {
  target: { value: "user" }
});

        expect(contentInput).toBeTruthy()
   })

})