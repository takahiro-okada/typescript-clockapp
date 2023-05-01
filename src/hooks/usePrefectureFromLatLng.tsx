import { useState, useEffect } from 'react';
import axios from 'axios';

const usePrefectureFromLatLng = (lat: number, lng: number) => {
  const [prefecture, setPrefecture] = useState<string>('');
  const apiKey = 'AIzaSyCYazbx4_m_eYhyIB6oNWgi1iX4p4pVOtk';
  useEffect(() => {
    const fetchPrefecture = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}&language=ja`
        );
        const { results } = response.data;
        const addressComponents = results[0]?.address_components;
        const prefectureComponent = addressComponents?.find((component: any) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          component.types.includes('administrative_area_level_1'));
        setPrefecture(prefectureComponent?.long_name || '');
      } catch (error) {
        console.error('Error fetching prefecture:', error);
      }
    };

    fetchPrefecture();
  }, [lat, lng]);

  return prefecture;
};

export default usePrefectureFromLatLng;
