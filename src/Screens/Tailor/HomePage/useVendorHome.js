import {useEffect, useState} from 'react';
import Instance from '../../../../Api/Instance';
import {useSelector} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default () => {
  const [materials, setMaterials] = useState([]);
  const [ongoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const options = {};
  const [errorMessage, setErrorMessage] = useState('');

  const {loading, userData} = useSelector(state => state.LoginReducer);
  let {access_token} = userData;

  useEffect(() => {
    //**gets all materials */
    const request = new Promise(res => {
      res(
        Instance.get('vendors/materials?provider=vendor', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        }),
      );
    });
    request.then(({data: data}) => {
      setMaterials(data.data);
    });
    // //**gets on-going projects */
    // const requestOnGoing = new Promise(res => {
    //   res(
    //     Instance.get('user/sew-jobs/ongoing?provider=user', {
    //       headers: {
    //         Authorization: 'Bearer ' + access_token,
    //       },
    //     }),
    //   );
    // });
    // requestOnGoing.then(({data: data}) => {
    //   setOnGoing(data.data);
    // });
    // //**gets completed projects */
    // const requestCompleted = new Promise(res => {
    //   res(
    //     Instance.get('user/sew-jobs/ongoing?provider=user', {
    //       headers: {
    //         Authorization: 'Bearer ' + access_token,
    //       },
    //     }),
    //   );
    // });
    // requestCompleted.then(({data: data}) => {
    //   setCompleted(data.data);
    // });
  }, [access_token]);

  return [materials, ongoing, completed];
};
