import express from "express"
import {promises as fs} from "fs"
import { createOrderValidator } from "../validations/createOrderValidator.js"

const {readFile, writeFile} = fs
const router = express.Router()

global.fileName = "orders.json"

router.get("/", async (req, res) => {

    try {
        const orders = JSON.parse(await readFile(global.fileName))
        res.send(orders)
    } catch(err) {
        res.status(400).send(err)
    }
    
})

router.post("/create-order/", async(req, res) => {
    const orders = JSON.parse(await readFile(global.fileName))

    try {
        const order = req.body

        createOrderValidator(order)

        order = { id: orders.nextId++, ...order }

        // orders.pedidos.push(order)

        // await writeFile(global.fileName, JSON.stringify(data, null, 2))

    } catch(err) {
        res.status(400).send(err)
    }
    
})

export default router