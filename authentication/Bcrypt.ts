import bcrypt from "bcrypt";

async function hashPassword(password: string): Promise<string> {
  const SALT_ROUNDS = 12;

  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Could not hash password",
    });
  }
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Could not compare password",
    });
  }
}

export { comparePassword, hashPassword };
