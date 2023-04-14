import { duplicatedEmailError } from "../errors/user-errors/duplicated-email-error";
import { NewUser } from "../protocols/user";
import userRepository from "../repositories/user-repository";
import bcrypt from "bcrypt";
import userCardRepository from "../repositories/userCard-repository";

async function signUp(data: NewUser) {
  const emailExists = await userRepository.findByEmail(data.email);
  if (emailExists) {
    throw duplicatedEmailError();
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const userCreated = await userRepository.createUser({
    name: data.name,
    password: hashedPassword,
    email: data.email,
  });

  await userCardRepository.createUserDeck(userCreated.id);
}

const userService = {
  signUp,
};

export default userService;
