import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";


const App = () => {

let [Images, setImages] = useState([])
console.log(Images)

  return (
    <div>
        {/* <SearchBar addImages={setImages}/>
        <ImageList  Images={Images}/> */}

        <SearchBar addImages={setImages}/>
        <ImageList images={Images}/>
    </div>
  );
}

export default App;
