CREATE TABLE boundary_line (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	boundary VARCHAR(14) NOT NULL, 
	name VARCHAR(44) NOT NULL, 
	`name:en` VARCHAR(32), 
	admin_level VARCHAR(32), 
	type VARCHAR(32), 
	border_type VARCHAR(32)
);
