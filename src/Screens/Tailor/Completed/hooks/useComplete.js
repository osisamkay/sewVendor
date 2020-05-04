import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Toast} from 'native-base';
import Instance from '../../../../Api/Instance';

export default () => {
  const [results, setResults] = useState([]);
  const [resultsOngoing, setResultsOngoing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status1, setStatus1] = useState(false);
  const options = {};
  const [Messages, setMessage] = useState('');

  const {userData, tailor_category_id} = useSelector(
    state => state.LoginReducer,
  );
  let {access_token} = userData;

  const Style = {
    width: widthPercentageToDP('88%'),
    alignSelf: 'center',
    borderRadius: 6,
  };
  //   const handleSort = async sortBy => {
  //     setLoading(true);
  //     try {
  //       const response = await Instance.get(
  //         `user/styles/${sortBy}?provider=user`,
  //         {
  //           headers: {
  //             Authorization: 'Bearer ' + access_token,
  //           },
  //         },
  //       );
  //       let s = response.data.status;
  //       let m = response.data.message;
  //       if (s) {
  //         setResults(response.data.data);
  //         setLoading(false);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (err) {
  //       setErrorMessage('Something went wrong');
  //     }
  //   };

  //   //** sort fabrics */
  //   const handleFabricSort = async sortBy => {
  //     setLoading(true);
  //     try {
  //       const response = await Instance.get(
  //         `user/materials/${sortBy}?provider=user`,
  //         {
  //           headers: {
  //             Authorization: 'Bearer ' + access_token,
  //           },
  //         },
  //       );
  //       let s = response.data.status;
  //       let m = response.data.message;
  //       if (s) {
  //         setResults(response.data.data);
  //         setLoading(false);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (err) {
  //       setErrorMessage('Something went wrong');
  //     }
  //   };
  //   const handleSearch = async style_name => {
  //     setLoading;
  //     try {
  //       const response = await Instance.get(
  //         `user/styles/${style_name}/search?provider=user`,
  //         {
  //           headers: {
  //             Authorization: 'Bearer ' + access_token,
  //           },
  //         },
  //       );

  //       let s = response.data.status;
  //       let m = response.data.message;
  //       if (s) {
  //         setResults(response.data.data);
  //         setLoading(false);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (err) {
  //       setErrorMessage('Something went wrong');
  //     }
  //   };

  useEffect(() => {
    console.log(access_token);
    /**get all pending requests */
    const request = new Promise(res => {
      res(
        Instance.get('vendors/tailor/jobs/completed?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    request
      .then(({data: data}) => {
        console.log(data);

        let s = data.status;
        let m = data.message;
        if (s) {
          setResults(data.data);
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
      })
      .catch(err => {
        alert(err);
      });
  }, [Style, access_token, tailor_category_id]);

  return [loading, results];
};
