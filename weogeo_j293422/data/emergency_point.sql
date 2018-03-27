CREATE TABLE emergency_point (
	`X` FLOAT NOT NULL, 
	`Y` FLOAT NOT NULL, 
	id INTEGER NOT NULL, 
	osm_id BIGINT NOT NULL, 
	z_order INTEGER NOT NULL, 
	emergency VARCHAR(12) NOT NULL, 
	ref VARCHAR(32), 
	name VARCHAR(32), 
	`name:en` VARCHAR(32), 
	amenity VARCHAR(32), 
	operator VARCHAR(32)
);
