import React, {useState, useEffect, useCallback} from 'react';
import Achievements from '../../../../assets/archivement.svg';
import Accepted from '../../../../assets/VendorRequest.svg';
import Measurement from '../../../../assets/accepted.svg';

export const Data = [
  {svg: <Accepted />, value: 150, text: 'Requests Accepted'},
  {svg: <Measurement />, value: 146, text: 'Materials Delivered (89.5%)'},
  {svg: <Achievements />, value: 103, text: 'Achievements Unlocked'},
];
