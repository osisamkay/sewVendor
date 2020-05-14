import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Toast} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Instance from '../../Api/Instance';

export default () => {
  const [purse, setPurse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [pendingR, setPending] = useState([]);
  const [history, setHistory] = useState([]);

  const {userData} = useSelector(state => state.LoginReducer);
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
  };

  const withrawalRequest = data => {
    setLoading(true);
    const request = new Promise(res => {
      res(
        Instance.post(
          'vendors/withdrawals/request?provider=vendor',
          {amount: data},
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
          setDone(true);
          Toast.show({
            text: m,
            buttonText: 'Okay',
            position: 'top',
            type: 'success',
            duration: 5000,
            style: Style,
          });
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
      })
      .catch(err => {
        console.log(err);
      });
    //**gets on-going projects */
  };

  useEffect(() => {
    /**gets user purse */
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
      let s = data.status;
      let m = data.message;
      if (s) {
        setPurse(data.data);
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

    /**get pending withdrawals */
    const requestPending = new Promise(res => {
      res(
        Instance.get('vendors/withdrawals/pending?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestPending.then(({data: data}) => {
      let p = data.data;
      setPending(data.data);
    });
    /**get pending withdrawals */
    const requestHistory = new Promise(res => {
      res(
        Instance.get('vendors/withdrawals?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestHistory.then(({data: data}) => {
      let p = data.data;
      setHistory(data.data);
    });
  }, [Style, access_token]);

  return [loading, purse, withrawalRequest, done, setDone, pendingR, history];
};
