import sendDiscordWebhook from './sendDiscordWebhook';

const submitContactForm = async (webhookToken, fields = {}) => {
  // Construct the message
  let message = '';

  // Iterate over the fields and append them to the message
  for (const [key, value] of Object.entries(fields)) {
    message += `${key}: ${value}\n`;
  }

  if (!message) {
    console.warn('No fields provided. Skipping message submission.');
    return;
  }
  console.log('message payload', message);
  console.log(typeof message);
  try {
    // Send the message using the sendDiscordWebhook function
    await sendDiscordWebhook(webhookToken, message);

    console.log('Message sent successfully!');
  } catch (error) {
    console.error('Failed to send message:', error);
    throw new Error(
      'An error occurred while sending the message. Please try again later.',
    );
  }
};

export default submitContactForm;
