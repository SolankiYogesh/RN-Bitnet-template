import Toast from 'react-native-toast-message';
const showToast = (
  msg,
  type = 'success',
  visibilityTime = 3000,
  autoHide = true,
) => {
  // type 'success | error | info'
  Toast.show({
    type,
    position: 'top',
    text1: msg,
    visibilityTime,
    autoHide,
  });
};

const validateEmail = val => {
  const reg =
    /^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([\\._-])?([a-zA-Z0-9]))*@(([a-zA-Z0-9\\-])+(\.))+([a-zA-Z]{2,4})+$/i;
  return reg.test(val);
};

export const deepClone = data => {
  return JSON.parse(JSON.stringify(data));
};

const Utility = {
  showToast,
  validateEmail,
  deepClone,
};
export default Utility;
