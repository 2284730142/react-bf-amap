import React, { useEffect, useRef } from 'react';
import * as AMapLoader from '@amap/amap-jsapi-loader';

// export interface BF_AMapProps {
//   AMapUI: any;
//   loca: boolean;
//   key: string;
//   id: string;
//   options: any;
//   setMap: Function;
//   plugins: string[];
// }

const BFAMap = (props) => {

  // 参数,plugins:[], id 需要在全局配置
  const { AMapUI, loca, plugins, setMap, options, id, map_key } = props;
  console.log(map_key);

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
      // @ts-ignore
      map.current.style.width = '100%';
      // @ts-ignore
      map.current.style.height = '100%';
      initMap();
    }
  }, [map]);

  if (!setMap || typeof setMap !== 'function') return null;
  if (!id) console.error('没有传入唯一ID！，There is no id!');
  if (!map_key) console.error('没有传入key！，There is no map key!');

  return (
    <div ref={map} id={id}/>
  );
};

export { BFAMap };

// AMapUI: {           // 是否加载 AMapUI，缺省不加载
//   version: '1.1',   // AMapUI 缺省 1.1
//   plugins: [],      // 需要加载的 AMapUI ui插件
// },
// Loca: {             // 是否加载 Loca， 缺省不加载
//   version: '1.3.2'  // Loca 版本，缺省 1.3.2
// },
