const { TestWatcher } = require('jest')
const request = require('supertest')

const app = require('../app.js')

describe("POST /users/register", ()=>{
    test("OK, Registration is successfull", async ()=>{
        const res = await request(app)
                          .post('/users/register')
                          .send({
                            "fname":"KLRahul",
                            "email":"rahul@gmail.com",
                            "password":"klrahul",
                            "role":"user"
                          })
                    console.log(res);
                    expect(res.statusCode).toEqual(200)
    },10000)
})

describe("POST /users/login",()=>{
   test("OK, Login is Succefull", async ()=>{
       const res = await request(app)
                        .post('/users/login')
                        .send({
                            "email":"Kaveri123@gmail.com",
                            "password":"Kaveri123@gmail.com"
                        })
                   console.log(res);
                   expect(res.statusCode).toEqual(200)

   },10000)
})

describe("GET /users/users",()=>{
    var token= null;
    beforeEach((done)=>{
        request(app)
          .post('/users/login')
          .send({
            "email":"Kaveri123@gmail.com",
            "password":"Kaveri123@gmail.com"
          })
          .end((err,res)=>{
              token = res._body.data.token
              console.log(token);
              done()
          })
    })

    test("OK, usersDetails getting done", async ()=>{
        const res = await request(app)
                          .get('/users/users')
                        
                    console.log(res);
                    expect(res.statusCode).toEqual(200)
    },20000)
})


describe("GET /users/edit-users",()=>{
    var token= null;
    beforeEach((done)=>{
        request(app)
          .post('/users/login')
          .send({
            "email":"Kaveri123@gmail.com",
            "password":"Kaveri123@gmail.com"
          })
          .end((err,res)=>{
              token = res._body.data.token
              console.log(token);
              done()
          })
    })

    test("OK, editDetails updated successfully", async ()=>{
        const res = await request(app)
                          .put('/users/edit-users')
                          .send({
                            "id":"621ef5f588e56c33e7407cf9",
                            "fname":"Kaveriwater",
                            "email":"Kaveri123@gmail.com",
                            "password":"Kaveri123@gmail.com",
                            "role":"admin"
                          })
                        
                    console.log(res);
                    expect(res.statusCode).toEqual(200)
    },20000)
})


describe("GET /samples/samples",()=>{
    var token= null;
    beforeEach((done)=>{
        request(app)
          .post('/users/login')
          .send({
            "email":"Kaveri123@gmail.com",
            "password":"Kaveri123@gmail.com"
          })
          .end((err,res)=>{
              token = res._body.data.token
              console.log(token);
              done()
          })
    })

    test("OK, sampleDetails getting done", async ()=>{
        const res = await request(app)
                          .get('/samples/samples')
                        
                    console.log(res);
                    expect(res.statusCode).toEqual(200)
    },20000)
})

