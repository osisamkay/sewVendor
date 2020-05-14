import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Instance from '../../../Api/Instance';
import {Toast} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default () => {
  const [styled, setStyles] = useState([]);
  const [ongoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(false);
  const [online, setOnline] = useState(false);
  const [profile, setProfile] = useState([]);
  const options = {};
  const [errorMessage, setErrorMessage] = useState('');

  const {userData} = useSelector(state => state.LoginReducer);
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
  };
  /**toggle visibility online */

  useEffect(() => {
    /**gets user profile */
    const request = new Promise(res => {
      res(
        Instance.get('vendors/profile?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    request.then(({data: data}) => {
      console.log(data);
      setProfile(data.data);
    });
  }, [access_token]);

  return [loading, online, profile];
};
