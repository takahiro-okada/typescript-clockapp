import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Clock from '../../types/Clock';

const ClocksMap = () => {
  const [clocks, setClocks] = useState<Clock[]>([]);
  const mapRef = useRef(null);
  const apiKey = 'AIzaSyCYazbx4_m_eYhyIB6oNWgi1iX4p4pVOtk';
  const location = useLocation();
  const selectedClock = location.state?.selectedClock;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="https://maps.googleapis.com/maps/api/js?key=${apiKey}"]`
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  useEffect(() => {
    const fetchClocks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/clocks');
        setClocks(response.data);
      } catch (error) {
        console.error('Error fetching clocks:', error);
      }
    };

    fetchClocks();
  }, []);

  useEffect(() => {
    if (window.google && mapRef.current && clocks.length > 0) {
      const mapOptions = {
        center: { lat: clocks[0].latitude, lng: clocks[0].longitude },
        zoom: 10,
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);
      const infoWindow = new window.google.maps.InfoWindow();

      clocks.forEach((clock) => {
        const marker = new window.google.maps.Marker({
          position: { lat: clock.latitude, lng: clock.longitude },
          map,
          title: clock.name,
        });

        const imageUrl = `http://localhost:8080/uploads/${clock.imagePath.split('/').pop()}`;

        const content = `
          <div>
            <h3>${clock.name}</h3>
            <img src="${imageUrl}" alt="${clock.name}" style="width: 200px; height: auto;" />
            <p>${clock.description}</p>
          </div>
        `;

        marker.addListener('click', () => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });
      });

      if (selectedClock) {
        map.setCenter({ lat: selectedClock.lat, lng: selectedClock.lng });
        map.setZoom(15);
      }
    }
  }, [clocks, selectedClock]);

  return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height: '600px' }} />
    </div>
  );
};

export default ClocksMap;
