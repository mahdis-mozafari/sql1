import express from 'express'
import db from './db/connection'
import {Router} from 'express'
import{
    getId,
    updateId,
    deleteId
 } from "./controllers/user.controllers"


const router = Router()

router.get('/:id',getId)
router.put('/:id',updateId)
router.delete("/:id",deleteId)

const app = express()
const port = 5000

app.use(express.json())


(async ()=>{
    await db.getConnection()
    console.log('connected to database');
    app.listen(port,()=>{
        console.log(`'app in run this port ${port}'`);
    })
})()