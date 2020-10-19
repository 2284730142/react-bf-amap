import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useEffect, useRef } from 'react';
import * as AMapLoader from '@amap/amap-jsapi-loader';

var BFAMap = function BFAMap(props) {
  var AMapUI = props.AMapUI,
      loca = props.loca,
      plugins = props.plugins,
      setMap = props.setMap,
      options = props.options,
      id = props.id,
      map_key = props.map_key;
  var map = useRef();

  var initMap = function initMap() {
    var option = {
      key: map_key,
      version: '2.0',
      plugins: (plugins === null || plugins === void 0 ? void 0 : plugins.map(function (im) {
        return "AMap.".concat(im);
      })) || [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等

    };

    if (AMapUI) {
      option = _objectSpread(_objectSpread({}, option), {}, {
        AMapUI: AMapUI
      });
    }

    if (loca) {
      option = _objectSpread(_objectSpread({}, option), {}, {
        Loca: {
          version: '1.3.2'
        }
      });
    }

    AMapLoader.load(_objectSpread({}, option)).then(function (AMap) {
      var _map = new AMap.Map(id, _objectSpread({}, options));

      setMap(_map, AMap);
    });
  };

  useEffect(function () {
    map.current.style.width = '100%';
    map.current.style.height = '100%';
    initMap();
  }, []);
  if (!setMap || typeof setMap !== 'function') return null;
  if (!id) console.error('没有传入唯一ID！，There is no id!');
  if (!map_key) console.error('没有传入key！，There is no map key!');
  return /*#__PURE__*/React.createElement("div", {
    ref: map,
    id: id
  });
};

export { BFAMap };