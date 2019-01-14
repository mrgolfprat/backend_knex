// process.env.NODE_ENV = "test"
// const chaiHttp = require('chai-http')
// const chai = require('chai'),
//     expect = chai.expect

// chai.use(chaiHttp)
// const server = require('../../../index')
// const knex = require('../../../knex')

// const base = '/api/v1/auth'

// describe('test auth', () => {
//     // beforeEach(done => {
//     //     knex.migrate.rollback()
//     //         .then(() => {
//     //             knex.migrate.latest()
//     //                 .then(() => {
//     //                     knex.seed.run()
//     //                         .then(() => {
//     //                             done();
//     //                         })
//     //                 });
//     //         });
//     // })

//     // afterEach(done => {
//     //     knex.migrate.rollback()
//     //         .then(() => {
//     //             done()
//     //         })
//     // })

//     describe('test admin register', () => {
//         it('admin register', done => {
//             chai.request(server)
//                 .post('/api/v1/auth/admin_register')
//                 .set('authorization', 'UL;+4[^`MV3z]E#cHJ|F6*S#4E%!0wEl&.1PloY*c3T=8l,[`L)=5lR9}So4GIh')
//                 .send({
//                     username: 'test03',
//                     password: '12345'
//                 })
//                 .end((err, res) => {
//                     expect(err).to.not.exist

//                     expect(res.type).to.equal('application/json')
//                     expect(res.body.success).to.equal(true)
//                     expect(res.body.result).to.equal('admin register success')

//                     done()
//                 })
//         })

//         it('admin register same', done => {
//             chai.request(server)
//                 .post('/api/v1/auth/admin_register')
//                 .set('authorization', 'UL;+4[^`MV3z]E#cHJ|F6*S#4E%!0wEl&.1PloY*c3T=8l,[`L)=5lR9}So4GIh')
//                 .send({
//                     username: 'test03',
//                     password: '12345'
//                 })
//                 .end((err, res) => {
//                     expect(err).to.not.exist

//                     expect(res.type).to.equal('application/json')
//                     expect(res.body.success).to.equal(false)
//                     expect(res.body.message).to.equal('username already use')

//                     done()
//                 })
//         })
//     })

//     describe('test user register', () => {
//         it('user register', done => {
//             chai.request(server)
//                 .post(base + '/user_register')
//                 .send({
//                     house_number: '92/1',
//                     swine: '12',
//                     alleyway: 'บ้านขาม',
//                     road: 'แจ้งสนิท',
//                     sub_district: 'ขามใหญ่',
//                     district: "เมือง",
//                     province: "อุบลราชธานี",
//                     zipcode: 34000,

//                     id_card: '1349900990090',
//                     fname: 'ปราชญ์',
//                     lname: "จันทรมณี",
//                     phone: "0813581808",

//                     username: 'test02',
//                     password: '12345'
//                 }).end((err, res) => {
//                     console.log(res.body.message)
//                     expect(err).to.not.exist
//                     expect(res.type).to.equal('application/json')
//                     expect(res.body.success).to.equal(true)
//                     expect(res.body.result).to.equal('user register success')
//                     done()
//                 })
//         })

//     })

//     describe('test login', () => {
//         it('test login with user test02', () => {
//             chai.request(server)
//                 .post(base + '/login')
//                 .send({
//                     username: 'test02',
//                     password: '12345'
//                 })
//                 .end((err, res) => {
//                     expect(err).to.not.exist
//                     expect(res.body.success).to.equal(true)
//                     expect(res.body.result).to.be.an('object')
//                 })

//         })
//     })


// })
