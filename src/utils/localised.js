import ProxyPolyfill from './proxy'
import store from '../store/configureStore'

const Proxy = new ProxyPolyfill();

const Localised = (strings, localeOverride) => {

    var handler = {
        get: function(obj, prop) {

            let locale;

            if (localeOverride) {
                locale = localeOverride
            } else {
                const state = store.getState();
                locale = state.settings.settings.locale;
            }

            // Return string for selected locale 
    
            if (obj[prop] && obj[prop][locale]) {
                return obj[prop][locale] 
            } else {
                return `Localised string not found for ${locale}`
            }
        }
    };

    return new Proxy(strings, handler);
}

export default Localised

