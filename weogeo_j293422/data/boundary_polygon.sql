CREATE TABLE boundary_polygon (
	`X` VARCHAR(32), 
	`Y` VARCHAR(32), 
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	boundary VARCHAR(14) NOT NULL, 
	name VARCHAR(24) NOT NULL, 
	`name:en` VARCHAR(24), 
	admin_level INTEGER, 
	type VARCHAR(32), 
	border_type VARCHAR(8)
);
