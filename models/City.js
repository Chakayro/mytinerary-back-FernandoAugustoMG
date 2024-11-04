import { Schema, model } from "mongoose"; //importando Schema y model de mongoose, para poder crear el modelo de la base de datos

let collection = "cities"; //defino el nombre de la coleccion
let CitySchema = new Schema({ //creo un nuevo esquema
    name: { type: String, required: true }, //defino el nombre de la ciudad
    photo: { type: String, required: true }, //defino la foto de la ciudad
    country: { type: String, required: true }, //defino el pais de la ciudad
    description: { type: String, required: true }, //defino la descripcion de la ciudad
    currency: { type: String, required: true }, //defino la moneda de la ciudad
    continent: { type: String, required: true }, //defino el continente de la ciudad
    language: { type: String, required: true }, //defino el idioma de la ciudad

}, {
    timestamps: true,//defino la fecha de creacion y actualizacion de la ciudad
}
);

let City = model(collection, CitySchema); //creo el modelo de la ciudad
export default City; //exporto el modelo de la ciudad
