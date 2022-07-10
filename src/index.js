import express from "express"
import ordersRouter from "../routes/orders.js"
import {promises as fs} from "fs"

const app = express()
const port = 3000
const { readFile, writeFile } = fs

app.use(express.json())
app.use("/orders", ordersRouter)

app.listen(port, async () => {
    try {
        await readFile("orders.json")
        console.log(`service start on http://localhost/${port}`)

    } catch (err) {
        console.log("the orders.json file must exist")
    }
})