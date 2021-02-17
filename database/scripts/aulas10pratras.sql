use siguza;

#criar tabelas

create table if not exists admins (
	id Tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
	nome Varchar(30) NOT NULL,
    email Varchar(40) NOT NULL,
    senha Varchar(12) NOT NULL,
    nascimento date,
    sexo enum ('M', 'F'),
    peso decimal(5,2),
    nacionalidade varchar(30) default 'Brasil',
    PRIMARY KEY (id)
) default charset = utf8;

#AULA 05 INSERT INTO

#Inserir informações na tabela na ordem que você desejar

insert into administradores (email, sexo, nacionalidade, peso, nome, senha, nascimento, id) values
('robertinha@gmail.com', 'F', 'Argentina', '60', 'Roberta', '12345678', '2003-08-15', DEFAULT),
('robertinho@gmail.com', 'M', 'Argentina', '70', 'Roberto', 'iefdfh334', '2001-01-01', DEFAULT);

#Inserir informações quando elas estão na mesma ordem da tabela

insert into administradores values
(DEFAULT, 'Pedro', 'pedrochoinski2018@gmail.com', '56pctD5$%', '2003-08-13', 'M', '65', DEFAULT),
(DEFAULT, 'Andre', 'andrefumanerii@gmail.com', '78kdD*@4HG', '2002-02-21', 'M', '65', DEFAULT),
(DEFAULT, 'Matheus', 'matheustellestab8@gmail.com', 'df444%8*', '2002-09-01', 'M', '65', DEFAULT);

DROP TABLE administradores;

select * from administradores;

desc administradores;

#AULA 06 ALTER TABLE

#adicionar coluna após uma determinada outra coluna, nesse caso "usuario" ficará após nome

alter table admins
add column usuario varchar(20) after nome;

#adicionar coluna para que a mesma fique na primeira posição

alter table admins
add column usuario varchar(20) first;

#modificar colunas já criadas, mudando seu tamanho ou constraints (a parte do update nao tem nada a ve)

UPDATE admins
SET usuario = ''
WHERE usuario is null;

alter table admins 
modify column usuario varchar(15) not null;

#renomear colunas (é preciso inserir as constraints novamente)

alter table admins 
change column usuario user varchar(15) not null;

#renomear tabelas

alter table admins 
rename to administradores;

#unique -valor unico, mas sem ser chave primaria
#zerofill - 0001, 00202, 0003 (vem automaticamente com unsigned - que por sua vez torna todos os valores positivos)

create table if not exists funcoes (
	idcurso tinyint zerofill unsigned,
	titulo varchar(30) not null unique,
    descricao varchar(50),
    ano year default '2021'
) default charset = utf8;

#Adicionar chave primária

alter table funcoes
add primary key (idcurso);

alter table funcoes
modify column idcurso tinyint zerofill unsigned auto_increment;

#AULA 07

insert into funcoes values
(default, 'banco de dados', 'criar o banco de dados', '2013'),
(default, 'backend', 'desenvolver o backend', '2020'),
(default, 'layout', 'desenvolver em html e css o layout', '2021'),
(default, 'qgis', 'desenvolver o webmapa no quantum gis', '2008');

select * from funcoes;
desc funcoes;
drop table funcoes;

#Atualizar linhas com condições

update funcoes
set titulo = 'database'
where idcurso = '1';

#Limit é usado para limitar o número de registros possíveis de se alterar, nesse caso seria apenas 1 (uma linha)

update funcoes
set titulo = 'funcionalidades', descricao = 'desenvolver funcionalidades', ano = '2021'
where idcurso = 2
limit 1;

#Deletar uma linha específica

delete from funcoes 
where idcurso = '4';

#Deletar TODAS as linhas da tabela

truncate table funcoes;

drop database siguza;