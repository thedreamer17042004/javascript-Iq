const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const {
    street: { number, name },
  } = person.location;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;

  return {
    phone,
    email,
    image,
    street: `${number} ${name}`,
    password,
    name: `${first} ${last}`,
    age,
  };
};

export default getUser;
