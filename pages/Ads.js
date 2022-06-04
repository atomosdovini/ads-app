import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/api/hello";

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
      <h1>{ads.message}</h1>
    </div>
  )
}