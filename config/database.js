import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);

async function conexionCities() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Connecting cities");
    } catch (error) {
        console.log(error);
    }
}

//use esta funcion para conectarse a la base de datos y no con then y catch para que sea mas facil de trabajar y controlar
//sin tanto then y acostumbrarme en otros 

conexionCities();