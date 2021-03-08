create table if not exists registros(
	id_reg int unsigned auto_increment,
    data_reg date not null,
    nome_reg varchar(254) not null,
    categoria_reg enum('Social', 'Ambiental', 'Transporte','Histórico') not null,
    subcategoria_reg varchar(80),
    descricao_reg text,
    endereco_reg varchar(100) not null,
    relpath_reg varchar(254) not null,
    fonte_reg varchar(30) not null,
    ano_foto_reg int(4),
    primary key (id_reg)
) default charset = utf8 ;

create table if not exists admins(
	id_admin smallint unsigned auto_increment,
    nome_admin varchar(50) not null,
    email_admin varchar(80) not null,
    senha_admin varchar(20) not null,
    primary key (id_admin)
);

create table if not exists adminReg_edit(
	id_edit int unsigned auto_increment,
    data_edit date not null,
    id_reg_fgk int,
    id_admin_fgk smallint,
    primary key (id_edit)
);

alter table adminReg_edit
add foreign key (id_reg_fgk)
references registros(id_reg);

alter table adminReg_edit
add foreign key (id_admin_fgk)
references admins(id_admin);





