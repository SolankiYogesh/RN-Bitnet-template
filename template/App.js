import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Toast, {BaseToast} from 'react-native-toast-message';
import Color from './src/Helpers/Color';
import Responsive from './src/Helpers/Responsive';
import Fonts from './src/Helpers/Fonts';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Store/Store';
import Route from './src/Route/Route';

const toastConfig = {
  success: ({text1, ...rest}) => (
    <BaseToast
      {...rest}
      style={styles.greenBorder}
      contentContainerStyle={styles.ph15}
      text2Style={styles.toastText}
      text2={text1}
      text2NumberOfLines={4}
    />
  ),
  error: ({text1, ...rest}) => (
    <BaseToast
      {...rest}
      style={styles.redBorder}
      contentContainerStyle={styles.ph15}
      text2Style={styles.toastText}
      text2={text1}
      text2NumberOfLines={4}
    />
  ),
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar animated barStyle="dark-content" />
        <Route />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  ph15: {
    paddingHorizontal: Responsive.scale(15),
  },
  toastText: {
    color: Color.white,
    fontSize: Responsive.moderateScale(12),
    fontFamily: Fonts.bold,
  },
  redBorder: {
    borderLeftColor: Color.red,
    borderColor: Color.red,
    borderWidth: 1,
    backgroundColor: Color?.charade,
  },
  greenBorder: {
    borderLeftColor: Color.greenShade04,
    borderColor: Color.greenShade04,
    borderWidth: 1,
    width: Responsive.widthPx(80),
    backgroundColor: Color.charade,
  },
});
