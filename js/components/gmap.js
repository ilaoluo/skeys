    // 加载macDiv高德地图，设置坐标
    var map = new AMap.Map('mapDiv', {
        center: [116.4808500000,39.9961200000],
        scrollWheel: false


    });

    // 加载工具条组件
    map.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Geolocation());
    });

    // 设置公司简介
    var marker = new AMap.Marker({
        position: [116.4808500000,39.9961200000]
    });
    marker.setMap(map);
    var circle = new AMap.Circle({
        center: [116.4808500000,39.9961200000],
        radius: 80,
        fillOpacity:0.1,
        strokeWeight:0
    })
    circle.setMap(map);
    map.setFitView()
    var info = new AMap.InfoWindow({
        content:"Skeys 用户体验中心",
        offset:new AMap.Pixel(0,0)
    })
    info.open(map,marker.getPosition())
