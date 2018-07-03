import ProxyPolyfill from 'proxy-polyfill/src/proxy'
import configureStore from '../store/configureStore'


const Proxy = new ProxyPolyfill();

const Localised = (strings, localeOverride) => {

    var handler = {
        get: function(obj, prop) {

            let locale;

            if (localeOverride) {
                locale = localeOverride
            } else {
                const state = configureStore.getState();
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

