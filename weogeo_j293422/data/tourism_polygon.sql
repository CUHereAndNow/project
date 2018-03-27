CREATE TABLE tourism_polygon (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	tourism VARCHAR(10) NOT NULL, 
	name VARCHAR(46), 
	`name:en` VARCHAR(32), 
	amenity VARCHAR(11), 
	building VARCHAR(10), 
	historic VARCHAR(32), 
	access VARCHAR(32), 
	fee VARCHAR(32), 
	ele INTEGER, 
	brand VARCHAR(32), 
	`tower:type` VARCHAR(32)
);
