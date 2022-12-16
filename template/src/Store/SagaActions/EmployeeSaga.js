import {takeEvery, call, put} from 'redux-saga/effects';
import {emplyeeSliceActions} from '../Reducers/EmployeeReducer'

function* workingSagaEmployee() {
  const emplyees = yield call(() =>
    fetch('https://dummy.restapiexample.com/api/v1/employees'),
  );

  const employeesFormat = yield emplyees.json();

  yield put(emplyeeSliceActions.setEmployee(employeesFormat?.data));
}

function* employeeSaga() {
  yield takeEvery('employee/getEmployee', workingSagaEmployee);
}

export default employeeSaga;
