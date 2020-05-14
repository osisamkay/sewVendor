import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Toast} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Instance from '../../../../Api/Instance';

export default () => {
  const [Achievements, setAchievements] = useState([]);
  const [completed, setCompleted] = useState([]);
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
    /**gets total achievements*/
    const request = new Promise(res => {
      res(
        Instance.get(
          'vendors/retailer/analytics/achievements?provider=vendor',
          {
            headers: {
              Authorization: 'Bearer ' + access_token,
            },
          },
        ),
      );
    });
    request.then(({data: data}) => {
      setAchievements(data.data);
    });
    /**gets sold materials */
    const requestCompleted = new Promise(res => {
      res(
        Instance.get('vendors/retailer/analytics/sold_out?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestCompleted.then(({data: data}) => {
      setCompleted(data.data);
    });
    /**gets completed jobs reviews */
    const requestReviews = new Promise(res => {
      res(
        Instance.get('vendors/tailor/jobs/reviews?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestReviews.then(({data: data}) => {
      console.log(data);
      let s = data.status;
      let m = data.message;
      if (s) {
        setReviews(data.data);
      } else {
        setMessage(m);
      }
    });
  }, [access_token]);

  return [Achievements, completed, reviews, message];
};
