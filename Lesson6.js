// Load required modules
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/renderers/SimpleRenderer",
  "esri/symbols/SimpleFillSymbol",
  "esri/widgets/Legend",
], (Map, MapView, FeatureLayer, SimpleRenderer, SimpleFillSymbol, Legend) => {
  // Define a default symbol for rendering features
  const defaultSym = new SimpleFillSymbol({
    outline: {
      color: "gray",
      width: 0.5,
    },
  });

  /*** Define a renderer for the feature layer using the default
  symbol and a visual variable color ***/
  const renderer = new SimpleRenderer({
    symbol: defaultSym,
    label: "State Boundaries", // Set a label for the renderer
    visualVariables: [
      {
        type: "color",
        field: "B01001_calc_pctDependE", // Percentage of population in dependent age groups
        stops: [
          // Define color stops with specific values and colors
          {
            value: 30,
            color: "#e0ecf4", // Assigned color for values less than 30%
            label: "< 30%",
          },
          {
            value: 39,
            color: "#9ebcda", // Assigned color for values equal to 39%
            label: "39% (National Average)",
          },
          {
            value: 47,
            color: "#8856a7", // Assigned color for values greater than 47%
            label: "> 47%",
          },
        ],
      },
    ],
  });

  // Define a popup template for the feature layer
  const template = {
    title: "ACS Total Population Boundaries in {NAME}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "NAME",
            label: "State",
          },
          {
            fieldName: "B01001_calc_pctDependE",
            label: "% of Pop in Dependent Age Groups (>18 & 65+)",
          },
        ],
      },
    ],
  };

  // Create a new feature layer with the provided URL, renderer, and popup template
  const popLyr = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/ACS_Total_Population_Boundaries/FeatureServer/0",
    renderer: renderer,
    minScale: 0,
    maxScale: 0,
    popupTemplate: template,
  });

  // Create a new map with the specified basemap and add the feature layer to it
  const map = new Map({
    basemap: "gray-vector",
    layers: [popLyr],
  });

  // Create a new map view and center on the United States
  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-98.6, 39.8],
    zoom: 4,
  });

  // Creata a new legend widget to display map legend
  const legend = new Legend({
    view: view,
    layerInfos: [
      {
        layer: popLyr,
        title: "ACS Total Population Boundaries by State",
      },
    ],
  });

  // Add the legend widget to the top-right corner of the map view
  view.ui.add(legend, "bottom-left");
});
