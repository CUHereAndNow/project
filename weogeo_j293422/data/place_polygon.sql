CREATE TABLE place_polygon (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	place VARCHAR(4) NOT NULL, 
	name VARCHAR(7) NOT NULL, 
	`name:en` VARCHAR(32), 
	population VARCHAR(32), 
	capital VARCHAR(32), 
	ele VARCHAR(32), 
	type VARCHAR(32)
);
