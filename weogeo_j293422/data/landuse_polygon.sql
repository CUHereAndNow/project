CREATE TABLE landuse_polygon (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	landuse VARCHAR(17) NOT NULL, 
	construction VARCHAR(32), 
	water VARCHAR(32), 
	wood VARCHAR(32), 
	amenity VARCHAR(32), 
	leisure VARCHAR(32), 
	tourism VARCHAR(10), 
	name VARCHAR(15), 
	`name:en` VARCHAR(32), 
	operator VARCHAR(32), 
	disused VARCHAR(32)
);
