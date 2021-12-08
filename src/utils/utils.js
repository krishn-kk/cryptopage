export const cryptoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "277ba18a57mshe24f786c05880a8p1f94fdjsnf34938a3dfab",
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
