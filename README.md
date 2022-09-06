# expo-native-symlink

testing symlinking with expo's 46 SDK.

## Install deps:

- `yarn`
- `yarn start` to see that the app opens successfully.

## Link your component

> This assumes you have an NPM package you can link from locally. Ensure you run `yarn link` in your folder OUTSIDE of this repo.

- Inside this project, open `metro.config.js` file and **uncomment** the lines indicated. Ensure you update the path correctly to your local project where your link from above comes from.

- Restart your server `yarn start`

- Expect the app to crash
