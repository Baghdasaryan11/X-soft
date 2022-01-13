import express from 'express';
import mongoose from 'mongoose';
import ProductRouter from './routes/ProductRouter.js';
import ReviewRouter from './routes/ReviewRouter.js';
import fileupload from 'express-fileupload'

const PORT = 5000;
const DB_URL = `mongodb+srv://Gevorg:xsoft134679@cluster0.e24lr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();
app.use(express.json())
app.use(express.static("static"))
app.use(fileupload({}))
app.use('/api',ProductRouter)
app.use('/api',ReviewRouter)

async function startApp(){

    try {
        await mongoose.connect(DB_URL,{useUnifiedTopology: true,useNewUrlParser: true})

        app.listen(PORT, () => {
            console.log(`Server is working on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp();


