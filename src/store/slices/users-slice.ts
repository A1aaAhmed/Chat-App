import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id: string | number;
  username: string;
  email: string;
  password: string;
  message: string;
  image: string;
}

interface IUsersState {
  list: IUser[];
}

// Function to generate a single user
const generateUser = () => {
  return {
    id: faker.string.uuid(), // Use faker.string.uuid() for UUID generation
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    message: faker.lorem.sentence(), // Add a random message
    image: faker.image.avatar(), // Add a random avatar image URL
  };
};

//-------start users api-----------

// Function to generate an array of users
const generateUsers = (numUsers: number) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    users.push(generateUser());
  }
  return users;
};

// Generate 10 users
const usersArray = generateUsers(10);

//console.log(usersArray);
//-------end users api-----------

const initialState: IUsersState = {
  list: usersArray,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer

