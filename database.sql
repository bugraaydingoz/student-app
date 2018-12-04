-- Create table
drop table students;
create table students (
	id	int(8) not null auto_increment,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	birth_date date not null,
	hobbies varchar(255) not null,
    pp_link varchar(255) not null,
	primary key (id)
);

-- Insert dummy data
-- 1
insert into students (
	first_name, 
	last_name ,
	birth_date,
	hobbies ,
    pp_link 
) values (
    "Bugra" ,
	"Aydingoz" ,
	"1996-01-29",
	"reading books, playing video games, playing guitar",
    "https://bulma.io/images/placeholders/128x128.png" 
);

-- 2
insert into students (
	first_name ,
	last_name ,
	birth_date,
	hobbies ,
    pp_link 
) values (
    "John" ,
	"Doe" ,
	"1986-11-29",
	"playing video games",
    "https://bulma.io/images/placeholders/128x128.png" 
);

-- 3
insert into students (
	first_name ,
	last_name ,
	birth_date,
	hobbies ,
    pp_link 
) values (
    "Anna" ,
	"Blue" ,
	"1994-06-12",
	"hiking",
    "https://bulma.io/images/placeholders/128x128.png" 
);