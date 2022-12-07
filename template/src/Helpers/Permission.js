import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

const getCameraPermission = () => {
  return new Promise(resolve => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.CAMERA,
        ios: PERMISSIONS.IOS.CAMERA,
      }),
    )
      .then(response => {
        if (response === 'granted') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(() => resolve(false));
  });
};

const getMicPermission = () => {
  return new Promise(resolve => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        ios: PERMISSIONS.IOS.MICROPHONE,
      }),
    )
      .then(response => {
        if (response === 'granted') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(() => resolve(false));
  });
};

const getStoragePermission = () => {
  return new Promise(resolve => {
    if (Platform.OS === 'ios') {
      resolve(true);
      return;
    }
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
      }),
    )
      .then(response => {
        if (response === 'granted') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(() => resolve(false));
  });
};

const Permission = {
  getCameraPermission,
  getStoragePermission,
  getMicPermission,
};

export default Permission;
