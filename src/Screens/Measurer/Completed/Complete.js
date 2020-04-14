import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {SearchBar, Divider} from 'react-native-elements';
import Sort from '../../../../assets/sort.svg';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Complete = ({route, navigation}) => {
  const [search, setSearch] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('Date');

  display;
  const [display, setDisplay] = useState(false);
  const updateSearch = search => {
    let value = search;
    setSearch(value);
  };

  //   set sort by drop down
  const drop = () => {
    LayoutAnimation.easeInEaseOut();
    setDisplay(!display);
  };

  //set Date change
  const onDateChange = date => {
    let selected = moment(date).format('Do MMM YYYY');
    setSelectedStartDate(selected);
    setDisplay(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <View style={styles.sort}>
          <Sort />
          <Text style={styles.sortTxt}>Select Date</Text>
        </View>
        <View style={styles.sortByContainer}>
          <View style={styles.drop}>
            <TouchableOpacity>
              <Text style={styles.sortTxt} onPress={drop}>
                {selectedStartDate}
              </Text>
            </TouchableOpacity>
            <Icon
              name={!display ? 'chevron-down' : 'chevron-up'}
              size={15}
              color="#000"
              onPress={drop}
            />
          </View>
          <View style={display ? '' : styles.display}>
            <CalendarPicker
              width={widthPercentageToDP('60%')}
              onDateChange={onDateChange}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Complete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 17,
  },
  headerTxt: {
    fontSize: heightPercentageToDP('3.125%'),
    textAlign: 'center',
    fontFamily: 'GT Walsheim Pro Regular Regular',
    color: '#fff',
    paddingBottom: 20,
  },
  searchContainer: {
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,.32)',
  },
  text: {
    fontFamily: 'GT Walsheim Pro Regular Regular',
    fontSize: heightPercentageToDP('2.5%'),
    padding: 0,
    color: '#3D7782',
  },
  sortContainer: {
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortTxt: {
    // color: '#E4E4E5',
    color: '#000',
    fontSize: heightPercentageToDP('2.2%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
    marginLeft: 9,
  },
  sortByContainer: {
    minWidth: widthPercentageToDP('39%'),
    borderWidth: 1,
    borderColor: '#E4E4E5',
    // height: 32,
    borderRadius: 8,
    padding: 7,
  },
  drop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  display: {
    display: 'none',
  },
  list: {
    justifyContent: 'space-between',
  },
});
