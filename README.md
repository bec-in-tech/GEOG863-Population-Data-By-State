# GEOG863 - Displaying Population Data by State Using ClassBreakRenderer

<b>Project Description:</b> 
<br>Displaying Population Data by State (Percent of Population in Dependent Age Groups Under 18 and 65+)

This project utilizes the ArcGIS API for JavaScript to visualize and analyze population data across different states in the United States. The primary objectives are to retrieve and display vector data from an external service, apply a custom renderer for visualizing population percentages, configure informative popups programmatically, and integrate a legend for enhanced map interpretation.

<b>Key Features and Components:</b>

1. Loading Required Modules: The project begins by loading essential modules such as the Map, MapView, FeatureLayer, SimpleRenderer, SimpleFillSymbol, and Legend from the ArcGIS API for JavaScript.

2. Defining Default Symbol and Renderer: A default symbol (SimpleFillSymbol) is defined for rendering features, emphasizing state boundaries with a gray outline. A custom renderer (SimpleRenderer) is created with a visual variable for color-coding based on the percentage of the population in dependent age groups.

3. Visualizing Population Percentages: The renderer utilizes a color visual variable, applying distinct colors to different ranges of the percentage of the population in dependent age groups. This visual representation enhances the understanding of population distribution across states.

4. Configuring Popup Template: A popup template is defined to provide information when interacting with map features. It displays the state name and the percentage of the population in dependent age groups. This information is sourced from the attribute table of the feature layer.

5. Creating Feature Layer: A feature layer (popLyr) is created, referencing an external vector data service (ACS Total Population Boundaries) hosted on ArcGIS Online. The renderer and popup template are applied to this feature layer for consistent visualization and informative interactions.

6. Creating Map and MapView: A new map is created with a gray vector basemap, and the feature layer is added to the map as a dynamic layer. A MapView is instantiated, centered on the United States with a predefined zoom level.

7. Integrating Legend Widget: A legend widget is configured to display information about the population boundaries by state. It provides users with a key to interpret the color-coded representation on the map.

8. User Interface Enhancement: The legend widget is added to the bottom-left corner of the map view, contributing to an improved user interface by offering a clear legend for reference.

The code uses a ClassBreaksRenderer as the renderer for visualizing population data. Specifically, it's implemented using the SimpleRenderer class with a visual variable of type "color" within the visualVariables property. The ClassBreaksRenderer is ideal for categorizing data into classes or ranges and assigning a specific symbol or color to each class based on attribute values.

Overall, this project serves as a comprehensive example of leveraging the ArcGIS API for JavaScript to visualize and analyze population data with a focus on state boundaries. The integration of custom renderers, popups, and legends enhances the interpretability and user experience of the map.

![image](https://github.com/bec-in-tech/GEOG863-Population-Data-By-State/assets/120440399/2dfdc901-8688-407a-b36c-d89a703d4f27)

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="LYJwZJE" data-user="rmu5072" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rmu5072/pen/LYJwZJE">
  Lesson 6 ClassBreakRenderer</a> by Rebecca U (<a href="https://codepen.io/rmu5072">@rmu5072</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
