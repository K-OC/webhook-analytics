import fetch from 'isomorphic-fetch';
import sendDiscordWebhook from './sendDiscordWebhook';

const sendWeatherToDiscord = async (webhookURL, location = '') => {
  const failedResponse = 404;
  try {
    const weatherURL = location
      ? `https://wttr.in/${location.replace(' ', '+')}?format=%C+%t+%w+%h`
      : 'https://wttr.in/?format=%C+%t+%w+%h';

    const response = await fetch(weatherURL);

    if (response.ok) {
      const weatherText = await response.text();

      // Format the weather message
      const weatherMessage = location
        ? `Weather For: ${location} \`\`\`\n${weatherText.trim()}\n\`\`\``
        : `\`\`\`\n${weatherText.trim()}\n\`\`\``;

      // Send the weather message to Discord channel
      await sendDiscordWebhook(webhookURL, weatherMessage);

      console.log('Weather sent successfully!');
    } else if (response.status === failedResponse) {
      console.error('Failed to fetch weather. Response status: 404');
    } else {
      console.error(
        'Failed to fetch weather. Response status:',
        response.status,
      );
    }
  } catch (error) {
    console.error('Failed to fetch weather:', error);
  }
};

export default sendWeatherToDiscord;
