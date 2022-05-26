import { useEffect, useState } from "react";
import ElegantImgCard from "./mui-library_colodev/src/cards/elegantImgCard/elegantImgCard";
import ff from "./ff.png";
import { setRgb } from "./mui-library_colodev/src/helpers/imgColor";
function App() {
  const [imgColor, setImgColor] = useState("loading");
  useEffect(() => {
    setImgColor(setRgb(ff));
  }, []);

  if (imgColor === "loading") return <>Loading...</>;
  console.log(imgColor);
  return (
    <div>
      <ElegantImgCard image={ff} imgCol={imgColor} />
    </div>
  );
}

export default App;
