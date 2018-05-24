import fetchUtils from "../utils/fetchUtils";
const PROD_BASE = "/.netlify/functions";
const DEV_BASE = `http://localhost:9000${PROD_BASE}`;
const BASE_URI = process.env.NODE_ENV === "development" ? DEV_BASE : PROD_BASE;
const METHOD_POST = "POST";
const METHOD_GET = "GET";

export const visitorToLead = visitorId => {
  const url = `${BASE_URI}/visitorToLead`;
  const params = {method: METHOD_POST, bodyObject: {visitorId}};
  return fetchUtils.request(url, params);
};
