CREATE TABLE waterway_line (
	id INTEGER NOT NULL, 
	osm_id INTEGER NOT NULL, 
	z_order INTEGER NOT NULL, 
	waterway VARCHAR(6) NOT NULL, 
	name VARCHAR(14), 
	`name:en` VARCHAR(32), 
	water VARCHAR(32), 
	culvert VARCHAR(32), 
	harbour VARCHAR(32), 
	intermittent VARCHAR(32), 
	layer VARCHAR(32), 
	`lock` VARCHAR(32), 
	tunnel VARCHAR(17), 
	width VARCHAR(32)
);
