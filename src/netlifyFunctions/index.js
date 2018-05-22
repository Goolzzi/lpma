import fetchUtils from "../utils/fetchUtils";
const BASE_URI = "http://localhost:9000";
const METHOD_POST = "POST";
const METHOD_GET = "GET";

export const visitorToLead = visitorId => {
  const url = `${BASE_URI}/visitorToLead`;
  const params = {method: METHOD_POST, bodyObject: {visitorId}};
  fetchUtils.request(url, params);
};
