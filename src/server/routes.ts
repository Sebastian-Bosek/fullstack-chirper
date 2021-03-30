import * as express from 'express';
import ChirpStore from '../../chirpstore';

const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

router.get('/api/hello', (req, res, next) => {
    const data = ChirpStore.GetChirps();
    // const chirps = Object.keys(data).map(key => {
    //     return {
    //         id: key,
    //         username: data[key].username,
    //         message: data[key].message
    //     };
    // });
    // chirps.pop();
    res.json(data);
});

router.get('/api/hello/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    const chirp = ChirpStore.GetChirp(chirpid);
    res.json(chirp);
})

router.post('/api/hello', (req, res) => {
    const chirp = req.body;
    ChirpStore.CreateChirp(chirp);
    res.status(201).json('Chirp Added!');
});

router.put('/api/hello/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    const chirp = req.body;
    ChirpStore.UpdateChirp(chirpid, chirp);
    res.status(200).json(`Chirp ${chirpid} Updated!`);
});

router.delete('/api/hello/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    ChirpStore.DeleteChirp(chirpid);
    res.status(200).json(`Chirp ${chirpid} Deleted`);
})

 export default router;