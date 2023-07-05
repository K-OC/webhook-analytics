import fetchUserInfo from './utils/fetchUserInfo';
import createUserInfoMessage from './utils/createUserInfoMessage';
import sendDiscordWebhook from './sendDiscordWebhook';

const sendUserInfo = async (webhookURL, options = {}) => {
  try {
    const userInfo = await fetchUserInfo(options);

    if (Object.keys(userInfo).length === 0) {
      console.warn('User info is empty, skipping webhook send.');
      return;
    }

    const message = createUserInfoMessage(userInfo, options);

    await sendDiscordWebhook(webhookURL, message);
  } catch (error) {
    console.error('Webhook send failed:', error);
  }
};

export default sendUserInfo;
