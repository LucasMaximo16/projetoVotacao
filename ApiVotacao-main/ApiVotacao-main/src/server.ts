import dotenv from 'dotenv';
import app from './app';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(<string>process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log('Servidor inicado na porta: ' + process.env.APP_PORT)
    })
  })
  .catch((error) => {
    console.log(error, ' ERRO CONNECT DATABASE')
  })
