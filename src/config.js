const API_URL = {
    prod: "TODO",
    dev: "http://localhost:5001/api/v1"
};

const ENV = process.env.NODE_ENV === "production" ? "prod" : "dev";

return {
    API_URL: API_URL[ENV]
};