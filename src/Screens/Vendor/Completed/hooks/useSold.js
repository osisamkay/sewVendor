import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Toast} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Instance from '../../../../Api/Instance';

export default () => {
  const [Achievements, setAchievements] = useState([]);
  const [sold, setSold] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState([]);

  const {userData} = useSelector(state => state.LoginReducer);
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
  };

  useEffect(() => {
    /**gets sold*/
    const request = new Promise(res => {
      res(
        Instance.get('vendors/materials/sold-out?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    request.then(({data: data}) => {
      let s = data.status;
      let m = data.message;
      if (s) {
        setSold(data.data);
      } else {
        Toast.show({
          text: m,
          buttonText: 'Okay',
          position: 'top',
          type: 'danger',
          duration: 5000,
          style: Style,
        });
      }
    });
  }, [Style, access_token]);

  return [sold];
};
