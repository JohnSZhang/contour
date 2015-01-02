$(function () {
    d3.json('http://forio.com/tools/contour/geo/us.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .choropleth({topoJson: mapUnit}, { feature: 'counties', projection: d3.geo.albersUsa() })
        .render();
    })
});