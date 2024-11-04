import City from "../../models/City.js";


let allCities = async (req, res, next) => { //1. Creo la función que me devuelva todas las ciudades
    try {
        let { name, description } = req.query;
        let query = {};
        if (name) {
            query.name = { $regex: new RegExp(`^${name}`, "i") };
        }
        if (description) {
            query.description = { $regex: new RegExp(description, "i") };
        }
        let all = await City.find(query);
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
}

let nameCity = async (req, res, next) => { //2. Creo la función que me devuelva una ciudad por su nombre
    try {
        let name = req.params.name;
        let city = await City.find({ name: name });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
}

let photoCity = async (req, res, next) => {
    try {
        let photo = req.params.photo;
        let city = await City.find({ photo: photo });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
} //3. Creo la función que me devuelva una ciudad por su foto

let countryCity = async (req, res, next) => {
    try {
        let country = req.params.country;
        let city = await City.find({ country: country });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
} //4. Creo la función que me devuelva una ciudad por su país

let _idCity = async (req, res, next) => {
    try {
        let _id = req.params._id;
        let city = await City.find({ _id: _id });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
} //5. Creo la función que me devuelva una ciudad por su id

let descriptionCity = async (req, res, next) => {
    try {
        let description = req.params.description;
        let city = await City.find({ description: description });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
} //6. Creo la función que me devuelva una ciudad por su descripción

let currencyCity = async (req, res, next) => {
    try {
        let currency = req.params.currency;
        let city = await City.find({ currency: currency });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
} //7. Creo la función que me devuelva una ciudad por su moneda

let continentCity = async (req, res, next) => {
    try {
        let continent = req.params.continent;
        let city = await City.find({ continent: continent });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
} //8. Creo la función que me devuelva una ciudad por su continente

let languageCity = async (req, res, next) => {
    try {
        let language = req.params.language;
        let city = await City.find({ language: language });
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        // return res.status(500).json({
        //     response: error
        // })
        next(error);
    }
} //9. Creo la función que me devuelva una ciudad por su idioma





export { allCities, nameCity, photoCity, countryCity, _idCity, descriptionCity, currencyCity, continentCity, languageCity }; //exporto las funciones de la ciudad