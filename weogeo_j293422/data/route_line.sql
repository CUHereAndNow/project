CREATE TABLE route_line (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	member INTEGER NOT NULL, 
	`index` INTEGER NOT NULL, 
	role VARCHAR(8), 
	type INTEGER NOT NULL, 
	relname VARCHAR(32), 
	name VARCHAR(15), 
	ref VARCHAR(4) NOT NULL, 
	network VARCHAR(32), 
	z_order INTEGER NOT NULL, 
	operator VARCHAR(4)
);
