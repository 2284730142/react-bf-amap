import React, { useState } from 'react';
import { BFAMap } from "./lib/index";

const App = (props) => {

  const [testState, setTestState] = useState(false);

  return ( <>
    <button onClick={() => {
      setTestState(!testState);
    }}>
      点击
    </button>
    <BFAMap
      id="a_map"
      map_key={window.AMAP_KEY}
      options={{
        zoom: 11,
        center: [121.498586, 31.239637],
        viewMode: '3D',
      }}
      plugins={['Scale', 'OverView', 'ToolBar',]}
      setMap={(map, AMap) => {
        const scale = new AMap.Scale();
        map.addControl(scale);
        const tollBar = new AMap.ToolBar();
        map.addControl(tollBar);
        console.log(map);
      }}/>
  </> )
};

export default App;
