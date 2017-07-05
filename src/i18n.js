const i18n = require('i18next');

const options = {
    fallbackLng: 'en',
    resources:  {
        en: 'locales/en.json',
        fr: 'locales/fr.json'
    },
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
        format: (value, format, lng) => {
            if (format === 'uppercase') return value.toUpperCase();
            return value;
        }
    },
    react: {
        wait: true
    }
};

// initialize if not already initialized
if (!i18n.isInitialized) i18n.init(options);

module.exports = i18n;