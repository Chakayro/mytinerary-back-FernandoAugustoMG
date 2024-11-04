import { Router } from "express";
import { allCities, nameCity, photoCity, countryCity, _idCity, descriptionCity, currencyCity, continentCity, languageCity } from "../controllers/cities/read.js";
import { createOne, createMany } from "../controllers/cities/create.js";

const citiesRouter = Router();

citiesRouter.get("/all", allCities);
citiesRouter.get("/name/:name", nameCity);
citiesRouter.get("/photo/:photo", photoCity);
citiesRouter.get("/country/:country", countryCity);
citiesRouter.get("/_id/:_id", _idCity);
citiesRouter.get("/description/:description", descriptionCity);
citiesRouter.get("/currency/:currency", currencyCity);
citiesRouter.get("/continent/:continent", continentCity);
citiesRouter.get("/language/:language", languageCity);

citiesRouter.post("/createOne", createOne);
citiesRouter.post("/createMany", createMany);

export default citiesRouter;