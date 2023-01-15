
import React, { useState } from 'react';
import './App.css';

function App() {
  const immag = [
    { src: "https://nationaltoday.com/wp-content/uploads/2021/12/Annoy-Squidward-Day-300x300.jpg" },
    { src: "https://www.dictionary.com/e/wp-content/uploads/2021/08/20210830_prayerHands_800x800-300x300.png" },
    { src: "http://www.deepdiveintel.com/wp-content/uploads/2013/09/Owl-Eye-art-300x300.jpg" }
  ]
  const [ImageVal, setImageVal] = useState(immag[0])
  const Change = (sum) => {
    const slider = immag[sum]
    setImageVal(slider)
  }
  return (
    <>
      <div className='Header'>
        <img src={ImageVal.src} />
      </div>
      <div className='bottomDiv'>
        {
          immag.map((data, e) =>
            <div className='fotos-click'>

              <img src={data.src} onClick={() => Change(e)} />

            </div>
          )
        }
      </div>
    </>
  );
}

export default App;
