import fetchUtils from "../utils/fetchUtils";
const BASE_URI = "/.netlify/functions";
const METHOD_POST = "POST";
const METHOD_GET = "GET";

const getUri = path => `${BASE_URI}${path}`;

export const visitorToLead = lead => {
  const url = getUri("/visitorToLead");
  const params = {method: METHOD_POST, bodyObject: {lead}};
  return fetchUtils.request(url, params);
};
