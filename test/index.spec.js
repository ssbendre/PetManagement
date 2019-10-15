// Require the dev-dependencies
import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import server from '../src/app';

chai.use(chaiHttp);

/*
 * Test the /GET route
 */
describe('/GET Blob', () => {
    it('it should GET all the blobs', (done) => {
        chai.request(server)
            .get('/blobs')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res.body).to.have.lengthOf(0);
                done();
            });
    });
});

/*
 * Test the /POST route
 */
describe('/POST blob', () => {
    it('it should POST a student ', (done) => {
        const newBlob = {
            blob: {
                firstName: 'Amrit',
                lastName: 'Sinha',
                available: 'true'
            }
        };
        chai.request(server)
            .post('/blob')
            .send(newBlob)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('firstName');
                expect(res.body).to.have.property('lastName');
                expect(res.body).to.have.property('available');

                done();
            });
    });
});

/*
 * Test the /PUT/:id route
 */
describe('/PUT/:id blob', () => {
    it('should update a SINGLE blob on /blob/<id> PUT', (done) => {
        chai.request(server)
            .get('/blobs')
            .end((err, res) => {
                chai.request(server)
                    .put(`/blob/${res.body[0]._id}`)
                    .send({
                        blob: {
                            firstName: 'Amy',
                            lastName: 'Sinha'
                        }
                    })
                    .end((error, response) => {
                        expect(response).to.have.status(200);
                        expect(response.body).to.be.a('object');
                        expect(response.body).to.have.property('firstName');
                        expect(response.body).to.have.property('lastName');
                        expect(response.body.firstName).to.equal('Amy');

                        done();
                    });
            });
    });
});

/*
 * Test the /DELETE/:id route
 */
describe('/DELETE/:id student', () => {
    it('should delete a SINGLE blob on /blob/<id> DELETE', (done) => {
        chai.request(server)
            .get('/blobs')
            .end((err, res) => {
                chai.request(server)
                    .delete(`/blob/${res.body[0]._id}`)
                    .end((error, response) => {
                        expect(response).to.have.status(200);
                        expect(response.body).to.be.a('object');
                        expect(response.body).to.have.property('firstName');
                        expect(response.body).to.have.property('lastName');
                        expect(response.body.firstName).to.equal('Amy');

                        done();
                    });
            });
    });
});
