const Contact = require('../models/Model')

const ContactController = {
    async create(req, res) {
        try {
            if (!req.body.name || !req.body.phone) {
                return res.status(400).send ({ error: "Nombre y teléfono son requeridos"})
            }
            const contact = await Contact.create({ ...req.body, completed: false })
            res.status(201).send(contact)
        } catch (error) {
            console.log(error)
            res.status(400).send({ error: 'Error al crear el modelo'})
        }
  },
  async getAll (req, res) {
    try {
        const contact = await Contact.find()
        res.json(contact)
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Error al enlazar modelo' })
    }
  },
  async getAllSSR (req, res) {
    try {
        const contact = await Contact.find()
        res.send(`
            <h1>Todos los contactos</h1>
            ${contact.map(contact => {
                return (
                    `<div>
                        <h2>${contact.name}</h2>
                        <p>${contact.phone}</p>
                        <p>${contact.email}</p>
                    </div>
                    `
                )
            }).join('')}
        `
        )
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Error al enlazar modelo por SSR' })
    }
  }
}

module.exports = ContactController;