import React from 'react';
import {createContext, useState, useContext} from 'react';
import api from '../services/api';

const FeedContext = createContext();
export default function FeedProvider({children}) {
  const [residenceName, setResidenceName] = useState('');
  const [price, setPrice] = useState(null);
  const [residenceType, setResidenceType] = useState(null);
  const [residencePlace, setResidencePlace] = useState(null);
  const [allowPets, setAllowPets] = useState(null);
  const [allowSmokers, setAllowSmokers] = useState(null);
  const [wifi, setWifi] = useState(null);
  const [kitchen, setKitchen] = useState(null);
  const [tv, setTV] = useState(null);
  const [ac, setAC] = useState(null);
  const [notebookWork, setNotebookWork] = useState(null);
  const [grill, setGrill] = useState(null);
  const [pool, setPool] = useState(null);
  const [parking, setParking] = useState(null);
  const [city, setCity] = useState(null);
  const [residences, setResidences] = useState([]);
  const [favoriteResidences, setFavoriteResidences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState(false);

  const [isFavoriteOk, setFavoriteOk] = useState(false);

  //Profile User
  const [is_email_available, setIsEmailAvailable] = useState(true);
  const [is_phone_available, setIsPhoneAvailable] = useState(true);
  const [is_location_available, setIsLocationAvailable] = useState(true);

  const [changedAvatar, setChangedAvatar] = useState(false);
  function CheckIfIsEmpty(x) {
    if (x === '') {
      return null;
    } else {
      return x;
    }
  }
  async function Search() {
    const response = await api.get('/residences', {
      params: {
        price: CheckIfIsEmpty(price),
        residence_place: CheckIfIsEmpty(residencePlace),
        city: CheckIfIsEmpty(city),
      },
    });
    if (response.data === undefined) {
      return response;
    } else {
      setFiltered(true);
      setLoading(false);
      setResidences(response.data);

      return response.data;
    }
  }

  function GetResidences() {
    api
      .get('/residences')
      .then((response) => {
        setResidences(response.data);
      })
      .catch((err) => {
        console.log(`erro ao buscar residências: ${err} `);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <FeedContext.Provider
      value={{
        residenceName,
        setResidenceName,
        price,
        setPrice,
        residenceType,
        setResidenceType,
        residencePlace,
        setResidencePlace,
        allowPets,
        setAllowPets,
        allowSmokers,
        setAllowSmokers,
        wifi,
        setWifi,
        kitchen,
        setKitchen,
        tv,
        setTV,
        ac,
        setAC,
        notebookWork,
        setNotebookWork,
        grill,
        setGrill,
        pool,
        setPool,
        parking,
        setParking,
        city,
        setCity,
        Search,
        residences,
        setResidences,
        loading,
        setLoading,
        filtered,
        setFiltered,
        favoriteResidences,
        setFavoriteResidences,
        isFavoriteOk,
        setFavoriteOk,
        is_email_available,
        setIsEmailAvailable,
        is_phone_available,
        setIsPhoneAvailable,
        is_location_available,
        setIsLocationAvailable,
        changedAvatar,
        setChangedAvatar,
        GetResidences,
      }}>
      {children}
    </FeedContext.Provider>
  );
}
export function useFeed() {
  const context = useContext(FeedContext);
  return context;
}
