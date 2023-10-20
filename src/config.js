const API_URL = {
    prod: "TODO",
    dev: "http://127.0.0.1:5001/"
};

const ENV = 
    process.env.NODE_ENV === "production"
        ? "prod"
        : "dev";

console.log("Environment:", ENV);

export const config = {
    API_URL: API_URL[ENV]
};