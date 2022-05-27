import { useEffect, useState } from "react";
import ElegantImgCard from "./mui-library_colodev/src/cards/elegantImgCard/elegantImgCard";
import ff from "./aa.webp";
import { getAverageRGB } from "./helpers/imgColor";

function App() {
  const [imgColor, setImgColor] = useState("loading");
  useEffect(() => {
    let img = new Image();
    img.src = ff;
    img.onload = function () {
      setImgColor(getAverageRGB(img));
    };
  }, []);

  if (imgColor === "loading") return <>Loading...</>;

  return (
    <div style={{ margin: 100, height: 820 }}>
      <ElegantImgCard image={ff} imgcolor={imgColor} />
    </div>
  );
}

export default App;
