create table cursos(
idCurso int,
nomeCurso varchar(45),
nomeProf varchar(45),
Categoria varchar(50),
Descricao varchar(80),
Imagem varchar (100)
);
insert into cursos (idCurso, nomeCurso, nomeProf, Categoria, Descricao)
values (1, 'Curso de JavaScript', 'Maria', 'Desenvolvimento', 'Curso de Js para iniciantes'),
(2, 'Curso de Java', 'Julia', 'Desenvolvimento', 'Curso de Java avançado'),
(3, 'Curso de Hardware', 'Bianca', 'Tecnologia', 'Curso de Hardware para iniciantes');

select idCurso, nomeCurso, nomeProf, Categoria, Descricao from cursos;
