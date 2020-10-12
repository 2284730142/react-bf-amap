import React from 'react';
import ReactDOM from 'react-dom';
// import BFAMap from "./lib/index";
import BFAMap from "./lib/index2";

ReactDOM.render(
  <div style={{ width: '600px', height: '600px' }}>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
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
  </div>,
  document.getElementById('root')
);
