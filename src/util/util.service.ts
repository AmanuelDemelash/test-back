import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UtilService {

   async hashPassword(password:string):Promise<String>{
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async comparePassword(userPassword:string,hashPassword:string):Promise<boolean>{
           return await bcrypt.compare(userPassword,hashPassword);
    }
}
