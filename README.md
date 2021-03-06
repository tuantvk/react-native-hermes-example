# react-native-hermes-example

App example for use hermes engine for Android.

Hermes is a JavaScript engine optimized for fast start up of React Native apps on Android. It features ahead-of-time static optimization and compact bytecode.

[Doc Hermes](https://facebook.github.io/react-native/docs/hermes)

![Demo layout 1](https://github.com/tuantvk/react-native-hermes-example/blob/master/assets/img/app.jpg)
![Demo layout 2](https://github.com/tuantvk/react-native-hermes-example/blob/master/assets/img/booking.jpg)

## Table of Content

1. [Development](#1-development)
2. [Contributing](#2-contributing)
3. [License](#3-license)

> Note:

Ensure you're using at least version >= 0.60.2 of React Native. If you're upgrading an existing app ensure everything works before trying to switch to Hermes.
Edit your android/app/build.gradle file and make the change illustrated below.

### Example:

![Example](https://github.com/tuantvk/react-native-hermes-example/blob/master/assets/img/hermes.png)


## 1. Development

- Clone the repo:
```
git clone https://github.com/tuantvk/react-native-hermes-example.git
```

- Go to the project directory and install dependencies: 
```
cd react-native-hermes-example && npm install
```

```
$ react-native run-android
```

> Note:

If you build android error react-native-gesture-handler in __folder java lib__

Change: **android.support.v4.util.Pools** to **import androidx.core.util.Pools**

Generate the binary:
* For Android

> View
[Signed Apk Android](https://facebook.github.io/react-native/docs/signed-apk-android#docsNav)

After that, you will see the binary in `android/app/build` folder

## 2. Contributing

So you want to contribute? Fun! I love seeing new PRs for react-native-hermes-example.
If you are thinking about working on something, feel free to make an issue beforehand so that you can make sure it'll be worth your time!


## 3. License

MIT License