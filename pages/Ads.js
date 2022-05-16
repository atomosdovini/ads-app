import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3000/api/hello";

export default function AdsBanner() {
  const [ads, setAds] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAds(response.data);
    });
  }, []);

  if (!ads) return null;

  return (
    <div>
      <h1>{ads.Company}</h1>
      <h1>{ads.url}</h1>
    </div>
  )
}