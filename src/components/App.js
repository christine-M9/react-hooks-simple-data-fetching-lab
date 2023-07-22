// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []);

  if (!dogImage) {
    return <p>Loading...</p>;
  }

  return <img alt="A Random Dog" src={dogImage} />;
}
export default App;