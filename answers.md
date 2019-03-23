Essay questions:

1. Explain the difference between RDBMS and SQL.
- An RDBMS is a Relational Database Management System, which is database software, while SQL(Structured Query Language) is a database language. You use SQL itself to work with different RDBMS’s that exist. SQLite is an example of RDBMS that we use in LambdaSchool. Essentially, they are two completely different things that work together to solve problems related to data manipulation. 
	

2. Why do tables need a primary key?

- Tables need a primary key because you use that to auto increment when adding new data. It is also the main foundation for any table to become relational when working with other tables, and gives you a clear way of keeping track of the data. Primary keys can also help differentiate between tables that have rows with duplicate data. For instance, if two people had the same name, a primary key could at least be referenced to ensure the two pieces of data are separate (in addition to other keys that could help).

3. What is the name given to a table column that references the primary key on another table.
- A foreign Key

4. What do we need in order to have a many to many relationship between two tables.
— A relational table would be best to use in this instance. 