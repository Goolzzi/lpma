import fetchUtils from "../utils/fetchUtils";
const BASE_URI = "/.netlify/functions";
const METHOD_POST = "POST";
const METHOD_GET = "GET";

const getUri = path => `${BASE_URI}${path}`;

export const visitorToLead = visitorId => {
  const url = getUri("/visitorToLead");
  const params = {method: METHOD_POST, bodyObject: {visitorId}};
  return fetchUtils.request(url, params);
};
