const createUserInfoMessage = (userInfo, options = {}) => {
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

export default createUserInfoMessage;
