import * as bcrypt from "bcryptjs"

export class HashManager {

    public async hash(text: string): Promise<string> {
        const cost = 12
        const salt = await bcrypt.genSalt(cost)
        const result = await bcrypt.hash(text, salt)
        return result
    }

    public async compare(text: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(text, hash)
    }

}