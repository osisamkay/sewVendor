import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Toast} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Instance from '../../Api/Instance';

export default () => {
  const [Bank, setBank] = useState([]);
  const [currentBank, setCurrentBank] = useState([]);
  const [loading, setLoading] = useState(false);

  const {userData} = useSelector(state => state.LoginReducer);
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
    zIndex: 11111,
  };

  //** sort fabrics */
  const AddBank = async bankData => {
    setLoading(true);
    try {
      const response = await Instance.post(
        'vendors/banks/add?provider=vendor',
        bankData,
        {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        },
      );

      let s = response.data.status;
      let m = response.data.message;
      if (s) {
        // setResults(response.data.data);
        setLoading(false);
        Toast.show({
          text: m,
          buttonText: 'Okay',
          position: 'top',
          type: 'success',
          duration: 5000,
          style: Style,
        });
      } else {
        setLoading(false);
        // setReqMessage(m);
        Toast.show({
          text: m,
          buttonText: 'Okay',
          position: 'top',
          type: 'danger',
          duration: 5000,
          style: Style,
        });
      }
    } catch (err) {
      //   setErrorMessage('Something went wrong');
      setLoading(false);
    }
  };
  const setDefault = async bankData => {
    setLoading(true);
    try {
      const response = await Instance.put(
        'vendors/banks/set-default?provider=vendor',
        bankData,
        {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        },
      );
      let s = response.data.status;
      let m = response.data.message;
      if (s) {
        setLoading(false);
        Toast.show({
          text: m,
          buttonText: 'Okay',
          position: 'top',
          type: 'success',
          duration: 5000,
          style: Style,
        });
      } else {
        setLoading(false);
        // setReqMessage(m);
        Toast.show({
          text: m,
          buttonText: 'Okay',
          position: 'top',
          type: 'danger',
          duration: 5000,
          style: Style,
        });
      }
    } catch (err) {
      //   setErrorMessage('Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    /**gets user profile */
    const request = new Promise(res => {
      res(
        Instance.get('banks?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    request.then(({data: data}) => {
      let p = data.data;
      setBank(data.data);
    });
    //**gets on-going projects */
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
      setCurrentBank(data.data);
    });
  }, [access_token]);

  return [loading, Bank, AddBank, currentBank, setDefault];
};
