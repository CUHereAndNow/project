CREATE TABLE natural_point (
	`X` FLOAT NOT NULL, 
	`Y` FLOAT NOT NULL, 
	id INTEGER NOT NULL, 
	osm_id BIGINT NOT NULL, 
	z_order INTEGER NOT NULL, 
	`natural` VARCHAR(4) NOT NULL, 
	name VARCHAR(32), 
	`name:en` VARCHAR(32), 
	type VARCHAR(7), 
	ele VARCHAR(32), 
	water VARCHAR(32), 
	wetland VARCHAR(32), 
	wood VARCHAR(32)
);
