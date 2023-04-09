const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mode = 0;
    res.render('configurateur', {mode: mode});
})

router.post('/nbr', (req, res, next) => {
    const nombre_equipment = req.body.nbrequipment;
    console.log(nombre_equipment);
    const mode = 1;
    res.render('configurateur', {mode: mode, nbrequipment: nombre_equipment});
})

router.post("/config", (req, res, next) => {
    const mode = 2;
    const nbrequipment = req.body.nomequipment.length;
    const NomEquipment = req.body.nomequipment;


    res.render('configurateur', {mode: mode, nbrequipment: nbrequipment, NomEquipment: NomEquipment})
})

router.post('/configfile', (req, res, next) => {
    const mode = 3;
    res.render('configurateur', {mode: mode})
}) 

module.exports = router;