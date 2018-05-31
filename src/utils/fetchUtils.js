class FetchUtils {
  constructor() {
    this.baseHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  constructParams = ({headers, ...params}) => ({
    ...params,
    headers: {...this.baseHeaders, ...headers},
  });

  objectToQueryString = queryObject =>
    Object.keys(queryObject)
      .map(
        key =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`,
      )
      .join("&");

  request = (url, params) => {
    const {query, bodyObject, ...restParams} = params;
    const body = JSON.stringify(bodyObject);
    const queryString = this.objectToQueryString(query || {});
    const requestUrl = `${url}?${queryString}`;
    const requestParams = this.constructParams({...restParams, body});
    return fetch(requestUrl, requestParams); // eslint-disable-line
  };
}

const fetchUtils = new FetchUtils();
export default fetchUtils;
