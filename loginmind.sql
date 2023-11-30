create table login(
Email varchar(80),
Senha int
);
insert into login (Email, Senha)
values ('maria@gmail.com', 12345678),
('pedro@gmail.com', 12345678),
('julia@gmail.com', 12345678);

select Email, Senha from login;
