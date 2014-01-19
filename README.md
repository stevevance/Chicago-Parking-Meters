Chicago Parking Meters
======================

http://stevevance.net/parkingmeters/
A map of locations, cost, and time limits for all of Chicago's pay-and-display parking meters.

Data scraped on January 14, 2014, from the "Chicago Parking Meters, LLC" website http://chicagometers.com by hitting their API with the maximum radius (8 miles), once per randomly selected coordinate within Chicago boundaries (as selected in QGIS and verified by visualizing an 8 miles buffer). 

You can export the data from CartoDB, where the data is stored and retrieved by Leaflet to display on the map. 
http://stevevance.cartodb.com/tables/chicagoparkingmeters/public

Uses jQuery, Leaflet, and Leaflet.MarkerCluster plugin. 
