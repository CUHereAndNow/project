CREATE TABLE power_line (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	power VARCHAR(9) NOT NULL, 
	power_source VARCHAR(32), 
	`generator:source` VARCHAR(32), 
	layer VARCHAR(32)
);
