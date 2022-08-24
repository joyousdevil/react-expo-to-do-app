# react-to-do-app
An animated to do app that was created by following along craftzdog tutorial.

## Frameworks

- [React Native](https://reactnative.dev/) - ReactJS-based framework that can use native platform capabilities
   - `React` is `JavaScript`  library for building user interfaces.
   - `React Native` integrates the `React` Library with native app development.
- [Expo](https://expo.dev/) - Toolset for building and delivering RN apps
    - `Expo` managed workflow provides a shared native runtime.
    - Instead of writing native code, you focus on writing your `React` app in `JavaScript`.
    - Managed `Expo` projects have their own workflow including `Expo CLI`,
    which means you don't have to worry about `iOS` or `Android` specific settings.
- [React Navigation(v6)](https://reactnavigation.org/) - Routing and navigation
    - Easy to use, quick start navigation builder.
    - Customizable.
    - Platform specific look and feel, built for *both* `iOS` and `Android`.
    - Smooth animations and gestures.
- [NativeBase(v3)](https://nativebase.io/) - Themable component library
    - Accessible, utility-first component library.
    - Helps build consistent UI across `Android`, `iOS` and web.
    - Themeability as a core element allows complete app theme and component styles customization.
    - Powered by `React Native ARIA`, which provides `React Hooks` enabling quick accessible design system building.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animations
    - Provides comprehensive, low level abstraction for the `React Animated` library API.
    - Great flexibility with gesture based interactions.
- [React Native SVG](https://github.com/react-native-svg/react-native-svg) - Drawing SVG
    - Provides SVG support to `React Native` on `iOS`, `Android`, `macOS`, `Windows`, and web compatibility.
    - Supports most SVG elements and properties (Rect, Circle, Line, Polyline, Polygon, etc.)
- [Moti](https://moti.fyi/) - Helper module for Reanimated 2
    - Universal animation package for `React Native`.
    - 60 FPS animations running on the native thread.
    - Mount/unmount animations, like `Framer Motion`.
    - Variant & keyframe animations.
    - Sequence animations.
    - Loop & repeate animations.
    - Web support.
    - Expo support.
    - Next.js support.

## Project structure

```
$PROJECT_ROOT
├── App.tsx        # Entry point
└── src
    ├── screens    # Screen components
    ├── components # UI components
    ├── utils      # Custom hooks and helpers
    └── assets     # Image files
```

## Credits

- [SALY 3D Illustration Pack](https://www.figma.com/community/file/890095002328610853)
- [Animated SVG stroke example by William Candillon](https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/reanimated-2/src/StrokeAnimation)

## How to dev

This project can be run from the Expo client app.

```
yarn
expo start
```
