import { BaseDatabase } from "./BaseDatabase"
import { User } from "../model/User"
import { BandDatabase } from "./BandDatabase"

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "lama_users"

  public async createUser(id: string, email: string, name: string, password: string, role: string): Promise<void> {
      await BandDatabase.connection(UserDatabase.TABLE_NAME)
        .insert({
          id,
          email,
          name,
          password,
          role
        })
  }

  public async getUserByEmail(email: string): Promise<User[]> {
    const result = await BandDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
      .where({ email })

    return result

  }
}