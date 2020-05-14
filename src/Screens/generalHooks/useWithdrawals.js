import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Toast} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Instance from '../../Api/Instance';

export default () => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [currentBank, setCurrentBank] = useState([]);

  const {userData} = useSelector(state => state.LoginReducer);
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
  };
  /**set withrawal options */
  const withrawalOption = data => {
    setLoading(true);
    const request = new Promise(res => {
      console.log('you');
      res(
        Instance.put(
          'vendors/withdrawals/options/set?provider=vendor',
          {option_id: data},
          {
            headers: {
              Authorization: 'Bearer ' + access_token,
            },
          },
        ),
      );
    });
    request
      .then(({data: data}) => {
        setLoading(false);
        let s = data.status;
        let m = data.message;
        if (s) {
          let d = data.data;
          Toast.show({
            text: m,
            buttonText: 'Okay',
            position: 'top',
            type: 'success',
            duration: 5000,
            style: Style,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    //**gets on-going projects */
  };

  useEffect(() => {
    /**gets withdwawal options */
    const requestOptions = new Promise(res => {
      res(
        Instance.get('vendors/withdrawals/options?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestOptions.then(({data: data}) => {
      setOptions(data.data);
    });
    /**get current banks */
    const requestMyBanks = new Promise(res => {
      res(
        Instance.get('vendors/banks?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestMyBanks.then(({data: data}) => {
      console.log(data);
      setCurrentBank(data.data);
    });
  }, [access_token]);

  return [loading, options, currentBank, withrawalOption];
};
