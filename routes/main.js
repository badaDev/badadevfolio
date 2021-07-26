const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', async (req, res, next) => {
    const data = req.context

    const itemCtr = controllers.item.instance()
    data.portfolio1 = await itemCtr.get({ category: 'portfolio1' })
    data.portfolio2 = await itemCtr.get({ category: 'portfolio2' })
    data.portfolio3 = await itemCtr.get({ category: 'portfolio3' })


    res.render('index', data);
})

router.get('/items', async (req, res, next) => {
    const filters =req.query
    const itemCtr = controllers.item.instance()
    const items = await itemCtr.get(filters)

    res.json({
        items
    })
})

router.post('/contact', async (req, res, next) => {
    const contactData = req.body
    const contactCtr = controllers.contact.instance()
    const contact = await contactCtr.post(contactData)
    res.json(contact)
})






module.exports = router;