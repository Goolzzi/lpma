import favicons from "./favicons";
import meta from "./meta";

const metaAndFavicons = meta
  .concat(favicons)
  .map((element, i) => ({...element, key: i}));

export default metaAndFavicons;
