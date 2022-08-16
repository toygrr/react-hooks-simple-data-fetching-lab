// create your App component here
import React, { useEffect, useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((doggo) => setImage(doggo.message));
  }, []);

  if (!image) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}
