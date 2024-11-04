import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

const cities = [
    {
        name: "Paris",
        photo: "https://images.pond5.com/paris-france-eiffel-tower-day-024695193_prevstill.jpeg",
        country: "France",
        description: "The most romantic city in the world, Paris is a global center for art, fashion, gastronomy, and culture.",
        currency: "EUR",
        continent: "Europe",
        language: "French"
    },
    {
        name: "Kyoto",
        photo: "https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2023-05/7-day-itinerary-kyoto_9.jpg?itok=KOCC0A8K",
        country: "Japan",
        description: "A serene city that beautifully blends ancient traditions with modernity.",
        currency: "JPY",
        continent: "Asia",
        language: "Japanese"
    },
    {
        name: "Venice",
        photo: "https://mlynpfj2vdjy.i.optimole.com/cb:f-l6.38bfc/w:1540/h:1030/q:82/https://www.travelherstory.com/wp-content/uploads/2014/10/Things-to-Do-in-Venice-italy-for-One-Day-4.jpg",
        country: "Italy",
        description: "A city like no other with its winding canals, historic palaces, and charming bridges.",
        currency: "EUR",
        continent: "Europe",
        language: "Italian"
    },
    {
        name: "Rio de Janeiro",
        photo: "https://img.travelnaut.com/web/db/photose/location/sa/br/rio_de_janeiro/eaab64bbb1a12c10dcbee1d38a9681b8.jpeg?format=webp&width=3840&quality=75",
        country: "Brazil",
        description: "A city of contrasts, where stunning natural beauty meets vibrant urban life.",
        currency: "BRL",
        continent: "South America",
        language: "Portuguese"
    },
    {
        name: "Prague",
        photo: "https://whereangiewanders.com/wp-content/uploads/2020/03/prague-castle.jpg",
        country: "Czech Republic",
        description: "A city with fairy-tale charm with its Gothic and Baroque architecture.",
        currency: "CZK",
        continent: "Europe",
        language: "Czech"
    },
    {
        name: "Sydney",
        photo: "https://destinationlesstravel.com/wp-content/uploads/2023/11/Views-of-the-Sydney-Harbour-Bridge-on-a-sunny-day.jpg.webp",
        country: "Australia",
        description: "A city that practically sparkles with its harbor, beaches, and parks.",
        currency: "AUD",
        continent: "Oceania",
        language: "English"
    },
    {
        name: "Barcelona",
        photo: "https://xyuandbeyond.com/wp-content/uploads/2020/07/park-guell.jpg",
        country: "Spain",
        description: "A colorful capital with iconic Modernist architecture and Mediterranean beaches.",
        currency: "EUR",
        continent: "Europe",
        language: "Spanish"
    },
    {
        name: "Cape Town",
        photo: "https://images.myguide-cdn.com/capetown/companies/cape-town-private-full-day-cape-of-good-hope-tour/large/cape-town-private-full-day-cape-of-good-hope-tour-2340046.jpg",
        country: "South Africa",
        description: "A city with stunning natural beauty and vibrant urban life.",
        currency: "ZAR",
        continent: "Africa",
        language: "English"
    },
    {
        name: "San Francisco",
        photo: "https://www.sftravel.com/sites/default/files/styles/hero/public/2024-10/Golden-Gate-Sunny-Day.jpg.webp?itok=Wgskp9_E",
        country: "United States",
        description: "A city with a mix of history and modern culture, known for its iconic landmarks.",
        currency: "USD",
        continent: "North America",
        language: "English"
    },
    {
        name: "Vancouver",
        photo: "https://www.bigbrothersvancouver.com/wp-content/uploads/2023/08/Car-free.jpg",
        country: "Canada",
        description: "A city known for its natural beauty and vibrant culture.",
        currency: "CAD",
        continent: "North America",
        language: "English"
    },
    {
        name: "Rome",
        photo: "https://www.earthtrekkers.com/wp-content/uploads/2023/01/Colosseum-Rome-1.jpg.optimal.jpg",
        country: "Italy",
        description: "A city rich in history and culture, with iconic landmarks.",
        currency: "EUR",
        continent: "Europe",
        language: "Italian"
    },
    {
        name: "New York City",
        photo: "https://www.nomadasaurus.com/wp-content/uploads/2019/05/3-Days-In-New-York-City-Itinerary.jpg",
        country: "United States",
        description: "A bustling metropolis known for its iconic skyline and cultural diversity.",
        currency: "USD",
        continent: "North America",
        language: "English"
    },
    {

        name: "London",
        photo: "https://www.earthtrekkers.com/wp-content/uploads/2022/12/London-Eye-1.jpg.optimal.jpg",
        country: "United Kingdom",
        description: "A city with a rich history and vibrant culture.",
        currency: "GBP",
        continent: "Europe",
        language: "English"
    },
    {
        name: "Bangkok",
        photo: "https://www.brusselsairlines.com/aircore/cache/images/67686/eyJpZGVudGlmaWVyIjoxMTc3NywidHlwZSI6ImFzc2V0In0=_1.webp",
        country: "Thailand",
        description: "A city of contrasts, where ancient temples meet modern skyscrapers.",
        currency: "THB",
        continent: "Asia",
        language: "Thai"
    },
    {
        name: "Dubai",
        photo: "https://www.agoda.com/wp-content/uploads/2024/08/Jumeirah-beach-in-Dubai-United-Arab-Emirates-featured-1244x700.jpg",
        country: "United Arab Emirates",
        description: "A city known for its luxury shopping, ultramodern architecture, and vibrant nightlife.",
        currency: "AED",
        continent: "Asia",
        language: "Arabic"
    },

];


City.insertMany(cities)