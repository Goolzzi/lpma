class FetchUtils {
  constructor() {
    const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
    this.baseParams = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`, // TODO: Clean-up
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
