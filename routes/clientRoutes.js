const express = require('express');
const router = express.Router();
const clientController = require('../controllers/ClientController');

// Client CRUD Routes
router.post('/', clientController.createClient);
router.get('/', clientController.getClients);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
