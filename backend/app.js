import express from 'express';
import cors from 'cors'
import router from './routes/router.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api',router);



app.listen(3000, () => console.log('sevidor ligado porta 3000'))