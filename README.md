## Installation

To install the package, you can use npm:

```
npm install webhook-analytics
````

## Usage

To use the package, you need to import the `sendDiscordWebhook` function from the package:

```javascript
import { sendDiscordWebhook } from 'webhook-analytics';
````

The `sendDiscordWebhook` function accepts two parameters: `webhookURL` and `options`. The `webhookURL` is the URL of your Discord webhook where the user information will be sent. The `options` parameter is an optional object that allows you to customize the user information to include.

Here's an example of how to use the `sendDiscordWebhook` function:

```javascript
sendDiscordWebhook('https://discord.com/api/webhooks/123456789', {
  includeUserAgent: true,
  includeDeviceMemory: true,
  includeLanguages: true,
  includeLocation: true,
  includeWebdriver: true,
  includeIP: true,
  includeWebsite: "https://example.com",
});
```

By default, all the properties in the `options` object are set to `true`, meaning that all the available user information will be included. You can set any specific property to `false` to exclude it from the user information. The `includeWebsite` property allows you to specify the website URL, which defaults to `'example.com'` in case you are using the library for multiple projects in the same discord instance.

## License

This project is licensed under the [MIT License](LICENSE).


