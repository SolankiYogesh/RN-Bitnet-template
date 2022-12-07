import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserData = async userData => {
  try {
    global.isLogin = true;
    global.userData = userData;
    await AsyncStorage.setItem('@userData', JSON.stringify(userData));
  } catch (e) {
    global.isLogin = false;
    global.userData = null;
  }
};

const getUserData = () => {
  return new Promise(resolve => {
    try {
      global.isLogin = false;
      global.userData = null;
      AsyncStorage.getItem('@userData')
        .then(value => {
          if (value !== null) {
            global.isLogin = true;
            global.userData = JSON.parse(value);
            resolve(true);
          } else {
            global.isLogin = false;
            global.userData = null;
            resolve(false);
          }
        })
        .catch(() => resolve(false));
    } catch (e) {
      resolve(false);
    }
  });
};

const logout = async () => {
  global.isLogin = false;
  global.userData = null;
  AsyncStorage.removeItem('@userData');
  AsyncStorage.removeItem('@speakingAudioSpeed');
  AsyncStorage.removeItem('@listeningAudioSpeed');
  AsyncStorage.removeItem('@mokeCode');
  AsyncStorage.removeItem('@appOpenCount');
};

const Storage = {
  setUserData,
  getUserData,
  logout,
};

export default Storage;
