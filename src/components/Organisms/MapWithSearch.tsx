import React, { useRef, useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface MapWithSearchProps {
  apiKey: string;
  // eslint-disable-next-line react/no-unused-prop-types
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}
const MapWithSearch: React.FC<MapWithSearchProps> = ({ apiKey, onPlaceSelected }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const libraries: ('places' | 'geometry' | 'drawing' | 'localContext' | 'visualization')[] = ['places'];

  useEffect(() => {
    if (map && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
        fields: ['geometry.location'],
      });

      autocomplete.bindTo('bounds', map);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
          console.log('No place found');
          return;
        }
        console.log('Place found');
        console.log(place);
        setSelectedPlace(place);
        onPlaceSelected(place); // <- 追加: 親コンポーネントの関数を呼び出す

        // onConfirmButtonClick関数の処理をここに移動
        if (map && place.geometry && place.geometry.location) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
        }
      });
    }
  }, [map, onPlaceSelected]);

  const onConfirmButtonClick = () => {
    console.log('onConfirmButtonClick', { map, selectedPlace });

    if (map && selectedPlace && selectedPlace.geometry && selectedPlace.geometry.location) {
      map.panTo(selectedPlace.geometry.location);
      map.setZoom(15);
    }
  };

  return (
    <div>
      <div className="w-60 h-8 mb-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="場所を検索"
          className="w-full h-full p-0 pl-3 text-sm text-gray-700 border rounded shadow"
        />
      </div>
      <button
        type="button"
        onClick={onConfirmButtonClick}
        className="mt-2 px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        決定
      </button>
      <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
        <GoogleMap
          onLoad={(mapInstance: google.maps.Map) => setMap(mapInstance)}
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{ lat: 35.6895, lng: 139.6917 }} // 東京都庁の緯度経度
          zoom={10}
        />
      </LoadScript>
    </div>
  );
};

export default MapWithSearch;
