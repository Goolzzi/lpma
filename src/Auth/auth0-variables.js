export const AUTH_CONFIG = {
  domain: "gnun-lpma.au.auth0.com",
  clientId: "5Q7FQOsBFf0dXRv2Rn6G8uiuWDVdpmCv",
  callbackUrl:
    process.env.NODE_ENV === "production"
      ? "https://dev-lpma.netlify.com/callback"
      : "http://localhost:8000/callback",
};
