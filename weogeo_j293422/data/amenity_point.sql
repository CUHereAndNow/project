CREATE TABLE amenity_point (
	`X` FLOAT NOT NULL, 
	`Y` FLOAT NOT NULL, 
	id INTEGER NOT NULL, 
	osm_id BIGINT NOT NULL, 
	z_order INTEGER NOT NULL, 
	amenity VARCHAR(16) NOT NULL, 
	name VARCHAR(75), 
	`name:en` VARCHAR(32), 
	building VARCHAR(32), 
	`addr:housenumber` INTEGER, 
	`addr:housename` VARCHAR(32), 
	`addr:street` VARCHAR(15), 
	`addr:city` VARCHAR(7), 
	`addr:state` VARCHAR(32), 
	`addr:postcode` INTEGER, 
	`addr:place` VARCHAR(32), 
	`addr:country` VARCHAR(32), 
	`addr:hamlet` VARCHAR(32), 
	`addr:suburb` VARCHAR(32), 
	`addr:subdistrict` VARCHAR(32), 
	`addr:district` VARCHAR(32), 
	`addr:province` VARCHAR(32), 
	website VARCHAR(41), 
	`contact:website` VARCHAR(32), 
	phone VARCHAR(15), 
	`contact:phone` VARCHAR(32), 
	opening_hours VARCHAR(73), 
	cuisine VARCHAR(11), 
	religion VARCHAR(32), 
	denomination VARCHAR(32), 
	access BOOL, 
	wheelchair BOOL, 
	ele VARCHAR(32), 
	brand VARCHAR(32), 
	`tower:type` VARCHAR(32), 
	CHECK (access IN (0, 1)), 
	CHECK (wheelchair IN (0, 1))
);
