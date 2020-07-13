const express = require('express');
const router = express.Router();

const Contacto = require('../models/contactos');


router.get('/', async (req,res) => {
    const contactos = await Contacto.find();
    console.log(contactos);
    res.render('index',{
        contactos: contactos
    });
})

router.post('/agregar', async (req,res) => {
    const contactos = new Contacto(req.body);
    await contactos.save();
    res.redirect('/');
});

router.get('/editar/:id', async (req,res) =>{
    const { id } = req.params;
    const contactos = await Contacto.findById(id);
    res.render('editar', {
        contactos
    });
});

router.post('/editar/:id', async (req,res) =>{
    const { id } = req.params;
    await Contacto.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/borrar/:id',async (req,res) =>{
    const { id } = req.params;
    await Contacto.remove({_id: id});
    res.redirect('/');
});


module.exports = router;