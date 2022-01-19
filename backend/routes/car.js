const router = require('express').Router();
const Car = require('../models/car');


    //===========================================
    //Create register of user
    router.post('/save', async (req, res)=>{
        
        const { marca, matricula, modelo, tipo, preco, ano } = req.body

        // validations
        if(!marca) {
            return res.status(422).json({ msg: 'A marca é obrigatória' });
        }
        else if(!matricula) {
            return res.status(422).json({ msg: 'A matricula é obrigatória' });
        }
        else if(!modelo) {
            return res.status(422).json({ msg: 'O modelo é obrigatório' });
        }
        else if(!tipo) {
            return res.status(422).json({ msg: 'O tipo é obrigatório' });
        }
        else if(!preco) {
            return res.status(422).json({ msg: 'O preco é obrigatório' });
        }
        else if(!ano) {
            return res.status(422).json({ msg: 'O ano é obrigatório' });
        }

        const car = { 
            marca, 
            matricula, 
            modelo, 
            tipo, 
            preco, 
            ano 
        }
        try {
            //Registar carro
            await Car.create(car)
            res.status(201).json({ msg: 'Novo carro registado'})
        }  catch (msg){
            res.status(500).json({ msg: 'Não foi possível registar o carro, erro no servidor!'})
        } 
        console.log(req.body)
    });

    //Read list cars
    router.get('/list', async (req, res)=>{

        try {
            //List car
            const car = await Car.find()
            res.status(200).json(car)
        }  catch (msg){
            res.status(500).json({ msg: 'Carro não encontrado' });
        } 
        console.log(req.body)
    });

    //Read list cars
    router.get('/:id', async (req, res)=>{

        const id = req.params.id

        try {
            //List car by id
            const car = await Car.findOne({ _id: id })
            res.status(200).json(car)
        }  catch (error){
            res.status(500).json({ error: error })
        } 
        if (!car) {
            res.status(422).json({ msg: 'Carro não encontrado' });
            return
        }
        console.log(req.body)
    });

    //Updated car
    router.patch('/:id', async (req, res)=>{

        const id = req.params.id

        const { marca, matricula, modelo, tipo, preco, ano } = req.body

        const car = { 
            marca, 
            matricula, 
            modelo, 
            tipo, 
            preco, 
            ano 
        }

        try {
            //List car by id
            const updateCar = await Car.updateOne({ _id: id }, car);

            if(updateCar.matchedCount === 0) {
                res.status(422).json({ msg: 'Carro não modificado' });
                return
            }

            res.status(200).json(car);

        }  catch (error){
            res.status(500).json({ error: error })
        } 
        console.log(req.body)
    });

    //Delete cars
    router.delete('/:id', async (req, res)=>{

        const id = req.params.id

        if (!car) {
            res.status(422).json({ msg: 'Carro não encontrado' });
            return
        }

        try {
            //List car by id
            const car = await Car.deleteOne({ _id: id })
            res.status(200).json(car)
        } catch (msg) {
            res.status(500).json({ msg: 'Carro removido com sucesso' })
        } 
        console.log(req.body)
    });

module.exports = router;