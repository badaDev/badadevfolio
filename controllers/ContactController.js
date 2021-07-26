const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Contact = require('../models/Contact')

class ContactController extends Controller {
  constructor () {
    super(Contact, process.env)
  }

  async get (params) {
    const contacts = await Contact.find(params, Controller.parseFilters(params))
    return Contact.convertToJson(contacts)
  }

  async getById (id) {
    const contact = await Contact.findById(id)
    if (contact == null) {
      throw new Error(`${Contact.resourceName} ${id} not found.`)
    }

    return contact.summary()
  }

  async post (body) {
    const contact = await Contact.create(body)
    return contact.summary()
  }

  async put (id, params) {
    const contact = await Contact.findByIdAndUpdate(id, params, { new: true })
    return contact.summary()
  }

  async delete (id) {
    const contact = await Contact.findByIdAndRemove(id)
    return contact
  }
}

module.exports = new ContactController()

