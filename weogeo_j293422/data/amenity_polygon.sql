CREATE TABLE amenity_polygon (
	`X` VARCHAR(32), 
	`Y` VARCHAR(32), 
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	amenity VARCHAR(18) NOT NULL, 
	name VARCHAR(39), 
	`name:en` VARCHAR(32), 
	building VARCHAR(10), 
	`addr:housenumber` INTEGER, 
	`addr:housename` VARCHAR(32), 
	`addr:street` VARCHAR(19), 
	`addr:city` VARCHAR(7), 
	`addr:state` VARCHAR(32), 
	`addr:postcode` VARCHAR(32), 
	`addr:place` VARCHAR(32), 
	`addr:country` VARCHAR(32), 
	`addr:hamlet` VARCHAR(32), 
	`addr:suburb` VARCHAR(32), 
	`addr:subdistrict` VARCHAR(32), 
	`addr:district` VARCHAR(32), 
	`addr:province` VARCHAR(32), 
	website VARCHAR(30), 
	`contact:website` VARCHAR(32), 
	phone VARCHAR(32), 
	`contact:phone` VARCHAR(32), 
	opening_hours VARCHAR(32), 
	cuisine VARCHAR(32), 
	religion VARCHAR(32), 
	denomination VARCHAR(32), 
	access VARCHAR(10), 
	wheelchair BOOL, 
	ele INTEGER, 
	brand VARCHAR(32), 
	`tower:type` VARCHAR(32), 
	CHECK (wheelchair IN (0, 1))
);
