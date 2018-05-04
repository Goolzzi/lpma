class FetchUtils {
  constructor() {
    this.baseParams = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  constructParams = params => ({...this.baseParams, ...params});

  objectToQueryString = queryObject =>
    Object.keys(queryObject)
      .map(
        key =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`,
      )
      .join("&");

  request = (url, params) => {
    const {method, query, bodyObject} = params;
    const body = JSON.stringify(bodyObject);
    const queryString = this.objectToQueryString(query || {});
    const requestUrl = `${url}?${queryString}`;
    const requestParams = this.constructParams({method, body});
    return fetch(requestUrl, requestParams);
  };
}

const fetchUtils = new FetchUtils();
export default fetchUtils;
