import React, { useEffect, useRef } from 'react';
import * as AMapLoader from '@amap/amap-jsapi-loader';
const BFAMap = (props) => {
  const { AMapUI, loca, plugins, setMap, options, id, map_key } = props;
  const map = useRef();
  const initMap = () => {
    let option = {
      key: map_key,
      version: '2.0',
      plugins: plugins?.map(im => `AMap.${im}`) || [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    };
    if (AMapUI) {
      option = { ...option, AMapUI: AMapUI };
    }
    if (loca) {
      option = { ...option, Loca: { version: '1.3.2' } };
    }
    AMapLoader.load({ ...option }).then((AMap) => {
      const _map = new AMap.Map(id, { ...options });
      setMap(_map, AMap);
    });
  };
  useEffect(() => {
    if (map.current) {
      map.current.style.width = '100%';
      map.current.style.height = '100%';
      initMap();
    }
  });
  if (!setMap || typeof setMap !== 'function') return null;
  if (!id) console.error('没有传入唯一ID！，There is no id!');
  if (!map_key) console.error('没有传入key！，There is no map key!');
  return (
    <div ref={map} id={id}/>
  );
};
export { BFAMap };
