import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Instance from '../../../Api/Instance';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Toast} from 'native-base';

export default () => {
  const [results, setResults] = useState([]);
  const [resultsOngoing, setResultsOngoing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status1, setStatus1] = useState(false);
  const options = {};
  const [Messages, setMessage] = useState('');
  const [reqMessages, setReqMessage] = useState('');

  const {userData, tailor_category_id} = useSelector(
    state => state.LoginReducer,
  );
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
  };

  //** sort fabrics */
  const ViewRequest = async job_id => {
    setLoading(true);
    try {
      const response = await Instance.get(
        `vendors/tailor/jobs/${job_id}/details?provider=vendor`,
        {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        },
      );
      let s = response.data.status;
      let m = response.data.message;
      if (s) {
        setResults(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        setReqMessage(m);
      }
    } catch (err) {
      //   setErrorMessage('Something went wrong');
      setLoading(false);
    }
  };

  /**to trigger a project to completion */
  const CompleteRequest = async job_id => {
    setLoading(true);
    const dataId = {job_id};
    try {
      const response = await Instance.put(
        'vendors/tailor/jobs/trigger-completion?provider=vendor',
        dataId,
        {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        },
      );
      console.log(response);
      let s = response.data.status;
      let m = response.data.message;
      if (s) {
        setResults(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
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
    /**get all pending requests */
    const request = new Promise(res => {
      res(
        Instance.get('vendors/tailor/jobs/pending?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    request
      .then(({data: data}) => {
        let s = data.status;
        let m = data.message;
        if (s) {
          setResults(data.data);
        } else {
          setLoading(false);
          //   Toast.show({
          //     // text: m,
          //     // buttonText: 'Okay',
          //     // position: 'top',
          //     // type: 'danger',
          //     // duration: 5000,
          //     // style: Style,
          //   });
        }
      })
      .catch(err => {
        alert(err);
      });
    /**get all ongoing requests */
    const requestOngoing = new Promise(res => {
      res(
        Instance.get('vendors/tailor/jobs/ongoing?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    requestOngoing
      .then(({data: data}) => {
        let s = data.status;
        let m = data.message;
        if (s) {
          setResultsOngoing(data.data);
          setStatus1(s);
        } else {
          setStatus1(s);
          setMessage(m);

          //   Toast.show({
          //     text: m,
          //     buttonText: 'Okay',
          //     position: 'top',
          //     type: 'danger',
          //     duration: 5000,
          //     style: Style,
          //   });
        }
      })
      .catch(err => {
        alert(err);
      });
  }, [Style, access_token, tailor_category_id]);

  return [
    loading,
    results,
    resultsOngoing,
    Messages,
    status1,
    ViewRequest,
    reqMessages,
    setReqMessage,
    CompleteRequest,
  ];
};
