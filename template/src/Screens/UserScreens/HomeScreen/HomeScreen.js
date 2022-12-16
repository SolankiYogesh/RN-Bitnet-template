import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {emplyeeSliceActions} from '../../../Store/Reducers/EmployeeReducer'
import Responsive from '../../../Helpers/Responsive';

const HomeScreen = () => {
  const employee = useSelector(state => state?.employee.employee);
  const disaptch = useDispatch();

  useEffect(() => {
    disaptch(emplyeeSliceActions.getEmployee());
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.srNumber}>{index + 1}</Text>
        <View style={styles.border} />
        <View>
          <Text style={styles.name}>{item?.employee_name}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.salary}>Salary:-{item?.employee_salary}</Text>
            <Text style={styles.age}>Age:-{item?.employee_age}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={styles.headerContainer}>
        <Text
          style={styles.headerTitle}>
          Employee {employee?.length}
        </Text>
      </View>
      <FlatList
        data={employee}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.id}
        extraData={employee}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    alignSelf: 'center',
    padding: Responsive.scale(10),
    marginVertical: Responsive.verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    borderRadius:Responsive.moderateScale(10),
    backgroundColor:"white"
  },
  border: {
    width: Responsive.scale(2),
    height: '100%',
    backgroundColor: 'grey',
    marginRight: Responsive.scale(10),
  },
  srNumber: {
    fontSize: Responsive.moderateScale(18),
    marginRight: Responsive.scale(10),
    color: 'black',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Responsive.verticalScale(10),
    justifyContent: 'space-between',
    flex: 1,
  },
  name: {
    fontSize: Responsive.moderateScale(18),
    fontWeight: '500',
    color: 'black',
  },
  salary: {
    fontSize: Responsive.moderateScale(15),
    fontWeight: '500',
    color: '#00ff5b',
  },
  age: {
    fontSize: Responsive.moderateScale(15),
    fontWeight: '500',
    color: '#00d4ff',
    marginLeft: Responsive.scale(15),
  },
  headerTitle:{
      // flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: Responsive.moderateScale(18),
      fontWeight: 'bold',
      padding: Responsive.scale(10),
    
  },headerContainer:{
    width: '100%',
    backgroundColor: '#00d4ff',
  }
});
