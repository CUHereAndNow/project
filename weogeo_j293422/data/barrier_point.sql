CREATE TABLE barrier_point (
	`X` FLOAT NOT NULL, 
	`Y` FLOAT NOT NULL, 
	id INTEGER NOT NULL, 
	osm_id BIGINT NOT NULL, 
	z_order INTEGER NOT NULL, 
	barrier VARCHAR(9) NOT NULL, 
	access VARCHAR(32), 
	height VARCHAR(32), 
	wheelchair VARCHAR(32), 
	operator VARCHAR(32)
);
