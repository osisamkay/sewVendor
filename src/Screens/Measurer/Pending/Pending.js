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

const Data = [
  {
    id: 1,
    user: ' User098',
    distance: '3 miles away',
  },
  {
    id: 2,
    user: ' User097',
    distance: '3 miles away',
  },
];

const Pending = ({Measurements}) => {
  const [btn, setBtn] = useState('Arrived');
  const [id, setId] = useState();

  const navigation = useNavigation();

  const handleArrived = id => {
    setId(id);
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
                <View style={styles.reqTop}>
                  <View style={styles.user}>
                    <Image
                      source={require('../../../../assets/Profile.png')}
                      style={styles.img}
                    />
                    <Text style={styles.usertxt}>{data.user}</Text>
                  </View>
                  <Text style={styles.distance}>{data.distance}</Text>
                </View>
                <View style={styles.map}>
                  <Image
                    source={require('../../../../assets/Map.png')}
                    style={id === data.id ? styles.hide : styles.mapView}
                  />
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
                      <Cancel /> Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Button
                    id={data.id}
                    title="Arrived"
                    buttonStyle={id === data.id ? styles.hide : styles.btn}
                    onPress={title => {
                      handleArrived(data.id);
                    }}
                  />
                  <Button
                    id={data.id}
                    title="Start Measurement"
                    buttonStyle={id !== data.id ? styles.hide : styles.btn}
                    onPress={() => {
                      navigation.navigate('Measurements');
                    }}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pending;

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
  },
  hide: {
    display: 'none',
  },
  usertxt: {
    color: '#fff',
    fontSize: heightPercentageToDP('2.8%'),
    marginLeft: 10,
  },
  distance: {
    color: '#5CE3D9',
    fontSize: heightPercentageToDP('1.875%'),
  },
  reqTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
});
