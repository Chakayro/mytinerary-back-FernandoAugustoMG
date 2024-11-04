import express from 'express'; //importo express
import "dotenv/config.js"; //importo la configuracion de dotenv
import "./config/database.js";
import cors from 'cors'; //permite que cualquier cliente se conecte a mi servidor
import morgan from 'morgan';    //permite ver las peticiones que llegan al servidor
import indexRouter from './router/index.js'; //importo el router de index
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";

const server = express(); //creo una instancia de express
const PORT = process.env.PORT || 8080; //defino el puerto
const ready = () => console.log(`The magic happens in: http://localhost:${PORT} 🌈`); //creo una funcion que me imprime un mensaje en la consola

//middlewares
server.use(express.json()); //permite trabajar con fortmato json een entrada y salida
server.use(express.urlencoded({ extended: true })); //permite trabajar con formularios
server.use(cors()); //permite que cualquier cliente se conecte a mi servidor
server.use(morgan('dev')); //permite ver las peticiones que llegan al servidor  

//routes
server.use('/api', indexRouter);

server.use(not_found_handler);
server.use(error_handler);


server.listen(PORT, ready); //pongo a escuchar el servidor en el puerto 8080 