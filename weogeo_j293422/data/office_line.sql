CREATE TABLE office_line (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	office VARCHAR(23) NOT NULL, 
	name VARCHAR(30) NOT NULL, 
	`name:en` VARCHAR(32), 
	building VARCHAR(6) NOT NULL, 
	`addr:housenumber` INTEGER, 
	`addr:housename` VARCHAR(32), 
	`addr:street` VARCHAR(18), 
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
	website VARCHAR(32), 
	`contact:website` VARCHAR(32), 
	phone VARCHAR(32), 
	`contact:phone` VARCHAR(32), 
	opening_hours VARCHAR(32), 
	brand VARCHAR(32)
);
