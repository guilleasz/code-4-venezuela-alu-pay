const express = require('express')
const { api } = require('../config/axios')

const router = express.Router()

router.get('/', (req, res) => {
  api.get('/me/contacts')
    .then(({ data }) => {
      const contactsList = data.reduce((lists, contact) => {
        const contactType = contact.company.toLowerCase();
        delete contact.company 
        lists[contactType].push(contact)
      }, { students: [], professors: [] })

      res.send(contactsList)
    })
    .catch(() => res.sendStatus(500))
})

router.post('/', (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.emails ||
    !req.body.company
  ) {
    return res.status(403).send('Required params missing')
  }

  api.post('/me/contacts', req.body)
    .then(({ data }) => res.status(201).send(data))
    .catch(() => res.sendStatus(500))
})

module.exports = router;
