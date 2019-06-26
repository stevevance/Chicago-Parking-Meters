Chicago Parking Meters
======================

http://stevevance.net/parkingmeters/
A map of locations, cost, and time limits for all of Chicago's pay-and-display parking meters.

== Version 2 ==
**June 26, 2019**
Use this URL to grab a JSON-encoded list of all pay-and-display meters operated by Chicago Parking Meters, LLC. It uses the bounding box of the City of Chicago city limits. 

````
http://map.chicagometers.com/get_meters?ne_lat=42.023022&ne_lng=-87.523984&sw_lat=41.643919&sw_lng=-87.940101
````

I used OpenRefine to read that JSON list and convert it to CSV. I opened that CSV as a "delimited-text layer" in QGIS and exported it as GeoJSON.

== Version 1 ==
Data scraped on January 14, 2014, from the "Chicago Parking Meters, LLC" website http://chicagometers.com by hitting their API with the maximum radius (8 miles), once per randomly selected coordinate within Chicago boundaries (as selected in QGIS and verified by visualizing an 8 miles buffer). 

You can export the data from CartoDB, where the data is stored and retrieved by Leaflet to display on the map. 
http://stevevance.cartodb.com/tables/chicagoparkingmeters/public

Map design is based on OSM-Bright style template by MapBox and modified by me to emphasize bike lanes and de-emphasize highways. I also modified it to better highlight beaches and skate parks.

Uses jQuery, Leaflet, and Leaflet.MarkerCluster plugin. 
