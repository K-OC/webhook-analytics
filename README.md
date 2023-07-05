## Installation

To install the package, you can use npm:

```
npm install webhook-analytics
```

## Usage

To use the package, you need to import the `sendUserInfo` and `submitContactForm` functions from the package:

```javascript
import { sendUserInfo, submitContactForm } from 'webhook-analytics';
```

### Send User Information

The `sendUserInfo` function is used to send user information to a Discord webhook. It accepts two parameters: `webhookURL` and `options`. The `webhookURL` is the URL of your Discord webhook where the user information will be sent. The `options` parameter is an optional object that allows you to customize the user information to include.

Here's an example of how to use the `sendUserInfo` function:

```javascript
sendUserInfo('https://discord.com/api/webhooks/123456789', {
  includeUserAgent: true,
  includeDeviceMemory: true,
  includeLanguages: true,
  includeLocation: true,
  includeWebdriver: true,
  includeIP: true,
  includeWebsite: 'https://example.com',
});
```

By default, all the properties in the `options` object are set to `true`, meaning that all the available user information will be included. You can set any specific property to `false` to exclude it from the user information. The `includeWebsite` property allows you to specify the website URL, which defaults to `'example.com'` in case you are using the library for multiple projects in the same Discord instance.

### Submit Contact Form

The `submitContactForm` function is used to submit a contact form to a Discord webhook. It accepts two parameters: `webhookToken` and `fields`. The `webhookToken` is the URL of your Discord webhook where the form submission will be sent. The `fields` parameter is an object that contains the form field values.

Here's an example of how to use the `submitContactForm` function:

```javascript
submitContactForm('https://discord.com/api/webhooks/123456789', {
  name: 'John Doe',
  email: 'johndoe@example.com',
  subject: 'Inquiry',
  message: 'Hello, I have a question...',
});
```

You can pass any form field values as properties in the `fields` object. The properties should match the field names defined in your contact form.

## License

This project is licensed under the [MIT License](LICENSE).
