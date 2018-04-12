CREATE TABLE natural_polygon (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	`natural` VARCHAR(5) NOT NULL, 
	name VARCHAR(12), 
	`name:en` VARCHAR(32), 
	type VARCHAR(32), 
	ele INTEGER, 
	water VARCHAR(4), 
	wetland VARCHAR(32), 
	wood VARCHAR(32)
);
