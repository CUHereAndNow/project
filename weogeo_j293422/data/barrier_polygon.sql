CREATE TABLE barrier_polygon (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	barrier VARCHAR(5) NOT NULL, 
	access VARCHAR(32), 
	height VARCHAR(32), 
	wheelchair VARCHAR(32), 
	operator VARCHAR(32)
);
