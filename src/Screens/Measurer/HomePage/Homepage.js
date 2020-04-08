import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
// import FullScreenModal from '../../../components/Modal';
import Switches from 'react-native-switches';
import GreyWallet from '../../../../assets/Group2633.svg';
import Wallet from '../../../../assets/Group 2634.svg';
import Archivment from './Archivment';
import {Data} from './ArchivmentData';

const Homepage = ({route, navigation}) => {
  const [visible, setVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.group}>
        <View style={styles.TopView}>
          <View style={styles.status}>
            <Text style={styles.TopTxt}>
              {switchValue ? (
                <View style={styles.spot} />
              ) : (
                <View style={styles.greySpot} />
              )}
              {switchValue ? ' Online' : ' Offline'}
            </Text>
            <View style={styles.Switches}>
              <Switches
                shape={'pill'}
                buttonColor="#000"
                buttonSize={17}
                showText={false}
                sliderHeight={heightPercentageToDP('3.45%')}
                sliderWidth={widthPercentageToDP('11%')}
                colorSwitchOn="#5CE3D9"
                colorSwitchOff="#707070"
                onChange={() => setSwitchValue(!switchValue)}
                borderColor={switchValue ? '#5CE3D9' : '#707070'}
                value={switchValue}
                animationDuration={100}
              />
            </View>
          </View>
          <View style={styles.Wallet}>
            {switchValue ? <Wallet /> : <GreyWallet />}
          </View>
          <Text style={styles.bal}>Sew Balance</Text>
          <Text style={switchValue ? styles.amt : styles.amtgrey}>
            20,890
            <Text style={switchValue ? styles.amts : styles.amtsgrey}>NGN</Text>
          </Text>
          <Text style={styles.dueDate}>Next withdrawal due 7th April 20</Text>
        </View>
        <View style={styles.top}>
          {Data.map(data => {
            return (
              <Archivment img={data.svg} value={data.value} text={data.text} />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  group: {
    paddingVertical: 19,
  },
  TopView: {
    height: heightPercentageToDP('26.9%'),
    backgroundColor: '#000',
    width: widthPercentageToDP('89%'),
    borderRadius: 8,
    padding: 11,
  },
  spot: {
    height: 10,
    width: 10,
    backgroundColor: '#5CE3D9',
    borderRadius: 10,
  },
  greySpot: {
    height: 10,
    width: 10,
    backgroundColor: '#707070',
    borderRadius: 10,
  },
  TopTxt: {
    color: '#fff',
    fontFamily: 'GT Walsheim Pro Regular Regular',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Switches: {
    transform: [{rotate: '180deg'}],
  },
  Wallet: {
    alignItems: 'center',
    position: 'relative',
    top: -10,
  },
  bal: {
    color: '#fff',
    textAlign: 'center',
    fontSize: heightPercentageToDP('1.875%'),

    marginVertical: 12.55,
  },
  amt: {
    color: '#5CE3D9',
    fontSize: heightPercentageToDP('6.5%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
    textAlign: 'center',
  },
  amtgrey: {
    color: '#707070',
    fontSize: heightPercentageToDP('6.5%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
    textAlign: 'center',
  },
  amts: {
    color: '#5CE3D9',
    fontSize: heightPercentageToDP('2.26%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
  },
  amtsgrey: {
    color: '#707070',
    fontSize: heightPercentageToDP('2.26%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
  },
  dueDate: {
    color: '#fff',
    fontSize: heightPercentageToDP('1.66%'),
    paddingVertical: 10,
    textAlign: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 17,
  },
});
