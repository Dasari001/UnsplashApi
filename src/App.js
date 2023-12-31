import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";
import "./App.css"


const App = () => {

let [Images, setImages] = useState([])
// console.log(Images)

  return (
    <div>
        <SearchBar addImages={setImages}/>
        <ImageList images={Images}/>
    </div>
  );
}

export default App;
