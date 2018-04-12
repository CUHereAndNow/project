CREATE TABLE sport_polygon (
	`X` VARCHAR(32), 
	`Y` VARCHAR(32), 
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	sport VARCHAR(17) NOT NULL, 
	name VARCHAR(25), 
	`name:en` VARCHAR(32), 
	access VARCHAR(32), 
	covered VARCHAR(32), 
	ref VARCHAR(32), 
	leisure VARCHAR(13) NOT NULL
);
