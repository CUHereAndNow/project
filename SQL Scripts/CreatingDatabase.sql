drop schema ProjectDB;
create database ProjectDB;
use ProjectDB;

Create table UserProfiles
(
	id int(10) unsigned NOT NULL auto_increment,
	Email_Address varchar(100) NOT NULL,
    Passwords varchar(100) NOT NULL,
    Primary Key (id)
    
)
Character Set utf8 collate utf8_general_ci;
#UPDATE table SET Password = MD5(Passwords)

Create Table UserTags
(
	id int(10) unsigned NOT NULL auto_increment,
	Email_Address varchar(100) NOT NULL,
    Hall varchar(15) NULL,
    Tags varChar(500)  NULL,
    Primary Key (id)
)
Character Set utf8 collate utf8_general_ci;



