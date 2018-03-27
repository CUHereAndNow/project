CREATE TABLE tourism_point (
	`X` FLOAT NOT NULL, 
	`Y` FLOAT NOT NULL, 
	id INTEGER NOT NULL, 
	osm_id BIGINT NOT NULL, 
	z_order INTEGER NOT NULL, 
	tourism VARCHAR(11) NOT NULL, 
	name VARCHAR(21), 
	`name:en` VARCHAR(32), 
	amenity VARCHAR(32), 
	building VARCHAR(32), 
	historic VARCHAR(32), 
	access VARCHAR(32), 
	fee VARCHAR(32), 
	ele VARCHAR(32), 
	brand VARCHAR(32), 
	`tower:type` VARCHAR(32)
);
