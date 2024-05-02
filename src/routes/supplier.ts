import express from 'express'

import SupplierController from '../controllers/supplier-controller'
import Auth from '../middlewares/authMiddleware'

export const supplier = express.Router()

supplier.get('/', Auth.authToken, SupplierController.findAllSuppliers)
supplier.get('/:id', Auth.authToken, SupplierController.findById)
supplier.post('/', Auth.authToken, SupplierController.createNewSupplier)
supplier.delete('/:id', Auth.authToken, SupplierController.deleteById)
