import {useCallback, useEffect, useState} from 'react';
import {Manager} from '../../network/Manager';

const useHomeScreen = () => {
  const [data, setData] = useState({});
  const fetchImages = useCallback(async () => {
    const response = await Manager.getPics();
    setData(response.data);
  }, []);
  const {children: imagelist, dist} = data;
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return {
    data,
    imagelist,
  };
};

export default useHomeScreen;
