import { prismaClient } from '../database'
import { ISupplier } from '../interfaces'

export default class SupplierService {
  static findAllSupplier = async () => {
    const suppliers = await prismaClient.supplier.findMany()

    if (suppliers.length === 0) {
      return { type: 'SUPPLIER_NOT_FOUND', message: 'No suppliers found' }
    }
    return { type: null, message: suppliers }
  }

  static findById = async (id: string) => {
    const result = await prismaClient.supplier.findUnique({
      where: { id },
    })
    if (!result)
      return { type: 'SUPPLIER_NOT_FOUND', message: 'No suppliers found' }
    return { type: null, message: result }
  }

  static createNewSupplier = async (supplier: ISupplier) => {
    try {
      await prismaClient.supplier.create({
        data: { ...supplier },
      })

      return { type: null, message: 'Supplier registered successfully' }
    } catch (err) {
      return {
        type: 'SUPPLIER_ALREADY_REGISTERED',
        message: 'Supplier already registered',
      }
    }
  }

  static deleteById = async (id: string) => {
    try {
      await prismaClient.supplier.delete({
        where: { id },
      })

      return { type: null, message: 'Supplier successfully deleted' }
    } catch (err) {
      return { type: 'SUPPLIER_NOT_FOUND', message: 'No supplier found' }
    }
  }
}
