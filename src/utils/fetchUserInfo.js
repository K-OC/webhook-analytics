import fetchLocationData from './fetchLocationData';

const fetchUserInfo = async (options = {}) => {
  const result = {};
  if (window.navigator) {
    if (options.includeUserAgent !== false) {
      result.userAgent = navigator.userAgentData;
    }
    if (options.includeDeviceMemory !== false) {
      result.deviceMemory = navigator.deviceMemory;
    }
    if (options.includeLanguages !== false) {
      result.languages = navigator.languages;
    }
    if (options.includeWebdriver !== false) {
      result.webdriver = navigator.webdriver;
    }
    if (options.includeWebsite !== false) {
      result.website = options.website || 'example.com';
    }

    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      if (options.includeIP !== false) {
        result.ip = data.ip;
      }
      if (options.includeLocation !== false) {
        const locationData = await fetchLocationData();
        result.location = locationData;
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  return result;
};

export default fetchUserInfo;
