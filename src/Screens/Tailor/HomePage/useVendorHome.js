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
  const handleToggle = () => {
    setLoading(true);
    const request = new Promise(res => {
      console.log('you');
      res(
        Instance.put(
          'vendors/tailor/toggle-visibility?provider=vendor',
          {},
          {
            headers: {
              Authorization: 'Bearer ' + access_token,
            },
          },
        ),
      );
    });
    request.then(({data: data}) => {
      console.log(data);
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
        if (d.is_online == 1) {
          setOnline(true);
        } else {
          setOnline(false);
        }
      }
    });
    //**gets on-going projects */
  };

  const RunVendorHome = () => {
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
    //**gets all styles */
    //**gets all materials */
    const requestStyles = new Promise(res => {
      res(
        Instance.get('styles?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestStyles.then(({data: data}) => {
      setStyles(data.data);
    });
  };

  useEffect(() => {
    // /**gets user profile */
    // const request = new Promise(res => {
    //   res(
    //     Instance.get('vendors/profile?provider=vendor', {
    //       headers: {
    //         Authorization: 'Bearer ' + access_token,
    //       },
    //     }),
    //   );
    // });
    // request.then(({data: data}) => {
    //   console.log(data);
    //   setProfile(data.data);
    // });
    // //**gets all styles */
    // //**gets all materials */
    // const requestStyles = new Promise(res => {
    //   res(
    //     Instance.get('styles?provider=vendor', {
    //       headers: {
    //         Authorization: 'Bearer ' + access_token,
    //       },
    //     }),
    //   );
    // });
    // requestStyles.then(({data: data}) => {
    //   setStyles(data.data);
    // });
  }, [access_token]);

  return [loading, handleToggle, online, profile, styled, RunVendorHome];
};
