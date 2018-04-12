CREATE TABLE man_made_polygon (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	man_made VARCHAR(15) NOT NULL, 
	name VARCHAR(26), 
	`name:en` VARCHAR(32), 
	building VARCHAR(10), 
	type VARCHAR(32), 
	ref VARCHAR(32), 
	ele INTEGER, 
	height VARCHAR(32), 
	`tower:type` VARCHAR(32), 
	operator VARCHAR(30)
);
