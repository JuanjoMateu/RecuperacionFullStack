const Contact = require('../models/Model')

const ContactController = {
    async createContact(req, res) {
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
  },
  async getContact (req, res){
    try {
        const id = req.params._id
        const contact = await Contact.findById(id);
        if(!contact) {return res.status(404).json ({ mensaje: 'Contacto no encontrado'})}
        res.json(contact);

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Error al enlazar contacto' })
    }
  },
  async updateContact (req, res) {
    try {
        const id = req.params._id
        const updateContact = await Contact.findByIdAndUpdate(id, req.body, {new: true});

        if (!updateContact) return res.status(404).json({ mensaje: 'Contacto no encontrado' });
        res.json(updateContact);

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Error al actualizar el contacto' })
    }
  },
  async deleteContact (req, res){
    try {
        const id = req.params._id
        const deleteContact = await Contact.findByIdAndDelete(id)
        if (!deleteContact) {
            return res.status(404).json ({ mensaje: 'Contacto no encontrado'})}
        res.json({ mensaje: 'Contacto eliminado', deleteContact})
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Error al borrar el contacto' })
    }
  }
  
}

module.exports = ContactController;