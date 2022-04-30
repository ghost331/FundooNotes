import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

import app from '../../src/index';
let logintoken;
describe('User APIs Test', () => {
  before((done) => {

    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('POST/register', () => {
    it('given new user when added should return status 201', (done) => {
       const userdetail={
         firstname:"Ashish",
         lastname:"saini",
         email:"sainiashish12345@gmail.com",
         password:"ashish123"
       };
       request(app)
       .post('/api/v1/users/register')
       .send(userdetail)
       .end((err,res)=>{
         expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
         done();
       })

        });
        it('given new user with bad credentials  ', (done) => {
          const userdetail={
            email:"sainiashish12345@gmail.com",
            password:"ashish123"
          };
          request(app)
          .post('/api/v1/users/login')
          .send(userdetail)
          .end((err,res)=>{
            logintoken=res.body.data;
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          })
         
           });
        
    });
    describe('Forget Password',()=>{
    it('a user has forget his password and message had been sent to the respective mail',(done)=>{
      const userdetail={
        email:"sainiashish12345@gmail.com"
      };
      request(app)
      .post('/api/v1/users/forgetpassword')
      .send(userdetail)
      .end((err,res)=>{
        expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
        done();
      })

    });
  });
    describe('POST/', () => {
      it('given new user and crerating its first note status 201', (done) => {
         const notedetail={
        title:"the funday",
        description:"there is no fun",
        color:"white"
          
         };
         request(app)
         .post('/api/v1/notes')
         .send(notedetail)
         .set('token',`${logintoken}`)
         .end((err,res)=>{
           expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
           done();
         })
         
          });
          it('given user is fetching all the notes ', (done) => {
            request(app)
            .get('/api/v1/notes')
            .set('token',`${logintoken}`)
            .end((err,res)=>{
              expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);
              done();
            })
            
             });
        })
   
  });
