# React BF AMap
###### React版本的AMap插件，使用AMap2.0版本，并通过JS API Loader进行地图加载工作

#### 安装

    npm i react-bf-amap

#### 使用
    
    import React from 'react';
    import { BFAMap } from 'react-bf-amap';
    
    const Map = (props) => {
      return (
        <div  style={{ width: '200px', height: '200px' }}>
          <BFAMap
            id={YOUR_ID}
            map_key={YOUR_AMAP_KEY}
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
        </div>
      );
    };
    
    export default Map;
    
##### 重要：

    1. 一定要添加外容器，并保证外容器存在实际大小
    2. 确保你已经申请过高德地图的key，并能够引入改组件中使用

#### 参数

   | 参数名称 | 参数类型 | 是否必填 | 说明 | 示例值 |
   | :-------: | :----: | :----: | :----: | :----: |
   | id | string | 是 | 地图容器的id | a_map |
   | map_key | string | 是 | 地图的key | YOUR_AMAP_KEY |
   | options | object | 否 | 地图初始化的设置 | { zoom: 11, center: [121.498586, 31.239637] } |
   | plugins | string[] | 是 | 地图插件 | ['Scale', 'OverView', 'ToolBar'] |
   | loca | boolean | 否 | loca插件使用，暂时固定使用1.3.2版本 | false |
   | AMapUI | object | 是 | AMapUI插件 | { version: '1.1', plugins: [] } |
   | setMap | function | 是 | 设置地图, 返回值 map:地图实例,AMap:AMap函数,后续所有地图相关操作应该都在这里进行 | (map,AMap)=>{} |
   
#### AMap地图相关文档

   [AMap JS API v2.0](https://lbs.amap.com/api/jsapi-v2/summary)
   
   [AMapUI JS API v2.0](https://lbs.amap.com/api/amap-ui/intro)

#### License

    MIT

#### 更新日志

    MIT
