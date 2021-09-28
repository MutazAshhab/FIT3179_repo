var map = "js/visualization-2.vg.json";
vegaEmbed("#my_map", map)
    .then(function (result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    })
    .catch(console.error);
