import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Call from '../../../../assets/call.svg';
import Message from '../../../../assets/message.svg';
import Cancel from '../../../../assets/cancel.svg';
import {Button} from 'react-native-elements';
import PendingModal from './PendingModal';
import PendingModalConfirmation from './PendingModalConfirmation';
import CarouselModal from './CarouselModal';

const Data = [
  {
    id: 1,
    user: ' Retailer001',
    distance: '3 miles away',
    material: 'Ankara',
    Transit: false,
    size: '6 Yards',
  },
  {
    id: 2,
    user: ' Retailer002',
    distance: '3 miles away',
    material: 'Lace',
    Transit: true,
    size: '6 Yards',
  },
];

const TailorPending = ({Measurements}) => {
  const [btn, setBtn] = useState('Arrived');
  const [dispatch, setDispatch] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [openCarousel, setOpenCarousel] = useState(false);
  const [starCount, setStarCount] = useState(0);

  const navigation = useNavigation();

  const onStarRatingPress = rating => {
    setStarCount(rating);
  };
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        showHideTransition
        hidden={false}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={styles.group}>
          {Data.map(data => {
            return (
              <View key={data.id} style={styles.TopView}>
                <View
                  style={{
                    borderBottomColor: '#fff',
                    borderBottomWidth: 0.5,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../../../assets/Profile.png')}
                        style={styles.img}
                      />
                      <View>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: heightPercentageToDP('2.567%'),
                          }}>
                          Material Name
                        </Text>
                        <Text
                          style={{
                            color: '#5CE3D9',
                            fontSize: heightPercentageToDP('2.031%'),
                          }}>
                          Senetor with Cap
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: '#5CE3D9',
                          fontSize: heightPercentageToDP('2.031%'),
                        }}>
                        Due In 7 Days
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: heightPercentageToDP('2.655%'),
                        }}>
                        15,000NGN
                      </Text>
                    </View>
                  </View>
                  <View style={styles.actionGroup}>
                    <TouchableOpacity>
                      <Text style={styles.actions}>
                        <Call /> Call
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.actions}>
                        <Message /> Message
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.actions}>
                        <Cancel /> cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.reqTop}>
                  <View style={styles.user}>
                    <Image
                      source={require('../../../../assets/Profile.png')}
                      style={styles.img}
                    />
                    <View>
                      <Text style={styles.usertxt}>{data.user}</Text>
                      <Text style={styles.userMaterial}>{data.material}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.distance}>{data.distance}</Text>
                    <Text style={styles.distance}>{data.size}</Text>
                  </View>
                </View>
                <View style={styles.actionGroup}>
                  <TouchableOpacity>
                    <Text style={styles.actions}>
                      <Call /> Call
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.actions}>
                      <Message /> Message
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Button
                    id={data.id}
                    title={data.Transit ? 'Awaiting Material' : 'Sewing'}
                    buttonStyle={styles.btn}
                    disabled={data.Transit ? false : true}
                    disabledStyle={styles.btnT}
                    onPress={title => {
                      setDispatch(true);
                    }}
                    titleStyle={{color: '#000'}}
                  />
                  <Button
                    id={data.id}
                    title="Request Details"
                    buttonStyle={styles.btn}
                    onPress={() => {
                      setOpenCarousel(true);
                    }}
                    titleStyle={{color: '#000'}}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <PendingModal
        modalVisible={dispatch}
        closeModal={() => {
          setDispatch(false);
        }}
        Confirm={() => {
          setDispatch(false);
          setConfirm(true);
        }}
      />
      <PendingModalConfirmation
        modalVisible={confirm}
        closeModal={() => {
          setConfirm(false);
        }}
        Edit={() => {
          setConfirm(false);
        }}
        rate={starCount}
        Rating={onStarRatingPress}
      />
      <CarouselModal
        modalVisible={openCarousel}
        closeModal={() => {
          setOpenCarousel(false);
        }}
      />
    </SafeAreaView>
  );
};

export default TailorPending;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    // flex: 1,
  },
  group: {
    paddingVertical: 19,
  },
  TopView: {
    // height: heightPercentageToDP('26.9%'),
    backgroundColor: '#000',
    width: widthPercentageToDP('89%'),
    borderRadius: 8,
    padding: 19,
    marginBottom: 20,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: heightPercentageToDP('6%'),
    width: widthPercentageToDP('10.6%'),
    marginRight: 5,
  },
  hide: {
    display: 'none',
  },
  usertxt: {
    color: '#fff',
    fontSize: heightPercentageToDP('2.8%'),
  },
  userMaterial: {
    color: '#5CE3D9',
    fontSize: heightPercentageToDP('2.18%'),
  },
  distance: {
    color: '#5CE3D9',
    fontSize: heightPercentageToDP('1.875%'),
  },
  reqTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  mapView: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 8,
  },
  actions: {
    fontSize: heightPercentageToDP('2.031%'),
    color: '#fff',
  },
  actionGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  btn: {
    backgroundColor: '#5CE3D9',
    height: heightPercentageToDP('7.5%'),
    marginVertical: 10,
    width: widthPercentageToDP('37.6%'),
  },
  btnT: {
    backgroundColor: '#5CE3D9',
    color: 'black',
    height: heightPercentageToDP('7.5%'),
    marginVertical: 10,
  },
});
