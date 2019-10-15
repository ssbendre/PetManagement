import express from 'express';
import fs from 'fs';

const router = express.Router();

/**
 * Find All Owners
 * @param req
 * @param res
 * @return void
 */
const listOwners = async (req, res) => {
    try {
        fs.readFile('data.json','utf8',(err,content) => {
            res.status(200).json(JSON.parse(content));
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Find Pets by Owner Id
 * @param req
 * @param res
 * @return void
 */
const listPetsForOwner = async (req, res) => {
    try {
        fs.readFile('data.json','utf8',(err,content) => {
            let resp = JSON.parse(content).filter((item)=>{
                return item.phone === req.query.phone;
            });
            res.status(200).json(resp);
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Add a new Pet
 * @param req
 * @param res
 * @return void
 */
const addPets = async (req, res) => {
    try {
        fs.readFile('data.json',(err,content) => {
            if(content === undefined) {
                fs.writeFile('data.json',JSON.stringify(req.body),(err) => {
                    if(err) throw err;
                    res.status(200).json("File saved successfully");
                });
            } else {
                let tst = JSON.parse(content);
                for (let index = 0; index < req.body.length; index++) {
                    tst.push(req.body[index]);
                }
                
                fs.writeFile('data.json',JSON.stringify(tst),(err) => {
                    if(err) throw err;
                    res.status(200).json("File saved successfully");
                });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Update a Blob by id.
 * @param req
 * @param res
 * @return void
 */
const getPets = async (req, res) => {
    try {
        const blobSchema = new Blob(await Blob.findById(req.params.id));

        blobSchema.firstName = req.body.blob.firstName;
        blobSchema.lastName = req.body.blob.lastName;

        res.status(200).json(await blobSchema.save());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * api routes
 */
router.get('/listOwners', listOwners);
router.get('/listPetsForOwner/:id', listPetsForOwner);
router.post('/addPets', addPets);
router.get('/getPets/:id', getPets);

export default router;
