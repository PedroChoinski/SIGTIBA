
create table admins (
	id Tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
	nome Varchar(30) NOT NULL,
    email Varchar(40) NOT NULL,
    senha Varchar(12) NOT NULL,
    PRIMARY KEY (id)
) default charset = utf8;

insert into admins values
(DEFAULT, 'Pedro', 'pedrochoinski2018@gmail.com', '56pctD5$%'),
(DEFAULT, 'Andre', 'andrefumanerii@gmail.com', '78kdD*@4HG'),
(DEFAULT, 'Matheus', 'matheustellestab8@gmail.com', 'df444%8*');

select * from admins;

desc admins;

ALTER TABLE admins
add column usuario varchar(20);
