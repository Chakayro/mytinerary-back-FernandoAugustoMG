import City from "../../models/City.js";

let createOne = async (req, res, next) => {

    try {
        let city = req.body
        let all = await City.create(city);
        return res.status(201).json({ response: all });

    } catch (error) {
        // res.status(500).json({ message: ""Error adding city", error });
        next(error);
    }
}

let createMany = async (req, res, next) => {
    try {
        let cities = req.body
        let all = await City.insertMany(cities);
        return res.status(201).json({ response: all });

    } catch (error) {
        // res.status(500).json({ message: ""Error adding multiple cities", error});
        next(error);
    }
}

export { createOne, createMany };