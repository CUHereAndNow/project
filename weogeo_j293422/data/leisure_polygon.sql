CREATE TABLE leisure_polygon (
	`X` VARCHAR(32), 
	`Y` VARCHAR(32), 
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	leisure VARCHAR(13) NOT NULL, 
	name VARCHAR(41), 
	`name:en` VARCHAR(32), 
	type VARCHAR(32), 
	brand VARCHAR(32), 
	access VARCHAR(32), 
	harbour VARCHAR(32), 
	water VARCHAR(32), 
	sport VARCHAR(17), 
	barrier VARCHAR(5), 
	ele INTEGER, 
	building VARCHAR(10), 
	surface VARCHAR(5)
);
