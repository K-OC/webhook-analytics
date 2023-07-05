const sendDiscordWebhook = async (webhookURL, content) => {
  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      console.log('Webhook successfully sent!');
    } else {
      console.error(
        'Webhook send failed:',
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    console.error('Webhook send failed:', error);
  }
};

export default sendDiscordWebhook;
