export const cryptoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "c5daf53ee1msh0edb7f436af8c4ep1afdddjsnf9d85964d54a",

    //Todo : Add env variable
};
export const baseUrl = "https://coinranking1.p.rapidapi.com";
export const createUrl = (url, api) => {
    if (api === "crypto")
        return {
            method: "GET",
            url: url,
            headers: cryptoApiHeaders,
        };
    else
        return {
            method: "GET",
            url: url,
            headers: newsApiHeaders,
        };
};
export const newsApiHeaders = {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "277ba18a57mshe24f786c05880a8p1f94fdjsnf34938a3dfab",
};
export const baseNewsUrl =
    "https://bing-news-search1.p.rapidapi.com/news/search";
