// Require the dev-dependencies
import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import server from '../src/app';

chai.use(chaiHttp);

/*
 * Test the /GET route
 */
describe('/GET Owner List', () => {
    it('it should GET all the Owners', (done) => {
        chai.request(server)
            .get('/listOwners')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                done();
            });
    });
});

/*
 * Test the /listPetsForOwner route
 */
describe('/GET Pets belongs to Owner', () => {
    it('it should POST Pet with Owner ', (done) => {
        const newPet = {
            "Owner": {
                "name":"dfghjk",
                "address":"jkl",
                "phone":"4567890000",
                "email":"asdfasd",
                "Pets": {
                    "name":"aaaaaa",
                    "colour":"aaaaa",
                    "age":"45678",
                    "breed":"hjkl;"
                }
            }
        };
        chai.request(server)
            .post('/addPets')
            .send(newPet)
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });
});

/*
 * Test the /listPetsForOwner route
 */
describe('/GET Pets belongs to Owner', () => {
    it('it should GET Pets belongs to Owner ', (done) => {
        const petName = {
            name: 'fghjkl'
        }
        chai.request(server)
            .post('/getPets')
            .send(petName)
            .end((err, res) => {
                expect(res.body).to.be.a('array');
                done();
            });
    });
});

