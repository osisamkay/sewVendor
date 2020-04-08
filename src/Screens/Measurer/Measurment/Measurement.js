import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Button, Divider, Header} from 'react-native-elements';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import FullScreenModal from '../../components/Modal';
import {MeasureData} from './MesureData';
import MeasurementLabel from '../../components/MeasurementLabel';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import MeasurementModal from '../../components/AddMeasurementModal';

const Measurement = ({route, navigation}) => {
  const [visible, setVisible] = useState(false);

  //   opens modal
  const handleVisible = () => {
    setVisible(!visible);
  };

  // closes modal
  const handleModalClose = () => {
    setVisible(false);
  };

  // navigates to tailor page
  const handleNavigation = () => {
    setVisible(false);
    navigation.navigate('TailorScreen', {
      title: 'New Premium Design',
    });
  };

  const handleDeluxeNavigation = () => {
    setVisible(false);
    navigation.navigate('TailorScreen', {
      title: 'New Deluxe Design',
    });
  };
  // navigates to regular page
  const handelRegularNavigation = () => {
    setVisible(false);
    navigation.navigate('Measurements');
  };
  return (
    <View style={styles.container}>
      <Header
        placement="center"
        backgroundColor="#fff"
        containerStyle={styles.barStyle}
        leftComponent={
          <Ionicons
            onPress={() => {
              navigation.openDrawer();
            }}
            name="bars"
            size={30}
            color="black"
            style={{paddingLeft: 23}}
          />
        }
        leftContainerStyle={styles.left}
        rightContainerStyle={styles.left}
        rightComponent={
          <Ionicons
            onPress={() => {
              navigation.navigate('HomePages');
            }}
            name="times"
            size={25}
            color="black"
            style={{paddingRight: 23}}
          />
        }
        centerComponent={{
          text: <Text style={styles.maiHeaderTxt}>Measurement</Text>,
        }}
      />
      <View style={styles.group}>
        <View style={styles.btnContainer}>
          <Button
            title="Add New"
            buttonStyle={styles.btn}
            titleStyle={styles.textBtn}
            raised
            onPress={handleVisible}
          />
        </View>
        <View style={{...styles.ongoingContainer, marginTop: 20}}>
          <Divider
            style={{
              backgroundColor: 'rgba(0,0,0,.25)',

              position: 'relative',
              top: heightPercentageToDP('2%'),
            }}
          />
          <Text
            style={{
              ...styles.headers,
              backgroundColor: '#fff',
              paddingHorizontal: 5,
              alignSelf: 'center',
            }}>
            Saved Measurements
          </Text>

          <FlatList
            contentContainerStyle={styles.listContainer}
            keyExtractor={item => item}
            data={MeasureData}
            renderItem={({item}) => {
              return <MeasurementLabel title={item.name} />;
            }}
          />
        </View>
      </View>
      <MeasurementModal
        modalVisible={visible}
        closeModal={handleModalClose}
        navigateTailors={handleNavigation}
        navigateDeluxe={handleDeluxeNavigation}
        measurement={handelRegularNavigation}
      />
    </View>
  );
};

export default Measurement;

const styles = StyleSheet.create({
  maiHeaderTxt: {
    color: '#3D7782',
    fontSize: heightPercentageToDP('2.5%'),
    paddingBottom: 20,
  },
  barStyle: {
    height: 67,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  left: {
    paddingBottom: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 17,
  },
  group: {
    paddingVertical: 19,
  },
  headers: {
    fontFamily: 'GT Walsheim Pro Regular Regular',
    fontSize: heightPercentageToDP('2.5%'),
    color: 'rgba(61, 119, 130, 1)',
    textAlign: 'center',
  },
  btnContainer: {
    marginVertical: 20,
    width: widthPercentageToDP('82%'),
    alignSelf: 'center',
  },
  btn: {
    height: 63,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: '#fff',
    borderRadius: 32,
  },
  textBtn: {
    fontFamily: 'GT Walsheim Pro Regular Regular',
    fontSize: heightPercentageToDP('2.5%'),
    color: 'rgba(61, 119, 130, 1)',
  },
  ongoingContainer: {
    position: 'relative',
    width: widthPercentageToDP('100%'),
  },
  listContainer: {
    padding: 17,
  },
});
