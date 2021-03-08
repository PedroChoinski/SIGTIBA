select * from gafanhotos;
select * from cursos;
desc cursos;
desc gafanhotos;

#Aula 11

#Seleciona todos os dados da tabela cursos, porém ordenados pelo nome

select * from cursos
order by nome;

#Seleciona todos os dados da tabela cursos, porém ordenados pelo nome, a constraint desc deixa-os em ordem decrescente

select * from cursos
order by nome desc;

#Seleciona todos os dados da tabela cursos, porém ordenados pelo nome, a constraint desc deixa-os em ordem crescente

select * from cursos
order by nome asc;

#Fazer uma busca filtrando as colunas que você deseja ver

select ano, nome, carga from cursos
order by ano, nome;

#Fazer uma busca com filtro simples de where

select * from cursos 
where ano = '2016'
order by nome;

#Fazer buscas com filtros de where com vários operadores relacionais simples

select ano, nome, carga from cursos
where ano <= '2015'
order by ano, nome;

select ano, nome, carga from cursos
where ano < '2015'
order by ano, nome;

select ano, nome, carga from cursos
where ano > '2016'
order by ano, nome;

select ano, nome, carga from cursos
where ano >= '2016'
order by ano, nome;

select ano, nome, carga from cursos
where ano != '2014'
order by ano, nome;

#Fazer buscas com filtros de where com vários operadores relacionais um pouco mais complexos

select ano, nome, carga from cursos
where ano between '2017' and '2020'
order by ano desc, nome;

select ano, nome, carga from cursos 
where ano in ('2018', '2020')
order by ano desc, nome;

#Fazer buscas com filtros de where com vários operadores lógicos diferentes

select * from cursos
where carga >= 40 and totaulas >= 30
order by ano desc, nome;

select * from cursos
where carga >= 40 or totaulas >= 30
order by ano desc, nome;

#AULA 12

#Usar o operador like e not like(semelhante)

select * from cursos 
where nome like 'P%';

select * from cursos 
where nome like '%a';

select * from cursos 
where nome like '%a%';

select * from cursos 
where nome like '%java%';

select * from cursos 
where nome not like '%java%';

select * from cursos
where nome like 'ph%p';

#O underline exige que haja algum caractere, ao contrário do % que não é obrigatório

select * from cursos
where nome like 'ph%p_';

#Distinct é usado para que os valores não se repitam durante o select

select nacionalidade from gafanhotos 
order by nacionalidade;

select distinct nacionalidade from gafanhotos 
order by nacionalidade;

#Count é usado para contar o número de registros em determinadas condições 

select count(*) from cursos;

select count(carga) from cursos 
where carga > 30;

#Máximo e Mínimo

select max(carga) from cursos;

select nome, max(totaulas) from cursos 
where carga > 50;

select min(carga) from cursos;

select nome, min(totaulas) from cursos
where ano = '2016';

#Sum é usado para fazer o somatório total em uma coluna

select sum(carga) from cursos;

#Avg é usado para fazer a média de uma coluna

select avg(carga) from cursos;

#ALA 13

#Group By, usado para agrupar, não distinguir 

select carga, count(*) from cursos 
group by carga
order by carga desc;

select * from cursos
where totaulas > 20
order by totaulas desc;

select carga, count(*) from cursos 
where totaulas = 30
group by carga;

#Usar condições dentro do group by

#Sem a condição:

select ano, count(*) from cursos 
group by ano
order by count(*) desc;

#Com a condição:

select ano, count(*) from cursos 
group by ano
having count(*) > 3
order by count(*) desc;

select ano, count(*) from cursos 
group by ano
having ano > 2013
order by count(*) desc;

#Select dentro de select

select carga, count(*) from cursos
where ano>2015
group by carga
having carga > (select avg(carga) from cursos);


