const createContact = `
CREATE TABLE IF NOT EXISTS "Contacts"(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(50)
  )
`;
pool
  .query(createContact)
  .then((data) => {
    console.log(data, "success create table contact");
  })
  .catch((err) => {
    console.log(err, "error create table contact");
  });