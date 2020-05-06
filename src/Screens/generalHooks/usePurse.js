import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Toast} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Instance from '../../Api/Instance';

export default () => {
  const [purse, setPurse] = useState([]);

  const {userData} = useSelector(state => state.LoginReducer);
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
  };

  useEffect(() => {
    /**gets user profile */
    console.log(access_token);
    const request = new Promise(res => {
      res(
        Instance.get('vendors/purse?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    request.then(({data: data}) => {
      let p = data.data;
      setPurse(data.data);
    });
    //**gets on-going projects */
  }, [access_token]);

  return [purse];
};
