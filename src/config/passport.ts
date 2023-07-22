import passport from "passport";
import { Strategy as JWTStrategy,ExtractJwt} from "passport-jwt";
import { User } from "../models/userModel";
import { Request,Response,NextFunction } from "express";
import JWT from "jsonwebtoken";

require('dotenv').config();

const notAuthorized = {message:'not authorized', status: 401}

interface jwtAnimedas {
    id: number;
    isAdmin: boolean;
  }


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string,
}

passport.use(new JWTStrategy(options,async (payload, done)=>{
    const user = await User.findByPk(payload.id)
    if(user) {
        return done(null,user)
    }else{
        return done(notAuthorized, false);
    }
}));

export const generatejwt = (data:object)=>{
    return JWT.sign(data,process.env.JWT_SECRET_KEY as string, {expiresIn:'1d'})
}

export const isAdmin = (jwt:string): boolean =>{
    const bearerRemover = jwt.replace('Bearer ', '');
    const decodedToken = JWT.verify(bearerRemover,process.env.JWT_SECRET_KEY as string) as jwtAnimedas;
    try {
        if (decodedToken.isAdmin === true) {

            return true;
        }
        return false;
  
    } 
    catch (error) {
        console.error('erro ao verificar o token:', error);
        return false;
    }

}

export const PrivateEndpoint = (req:Request, res:Response, next:NextFunction) =>{
    passport.authenticate('jwt',(err:any,user:string)=>{
        req.user = user;
        return user ? next() : next(notAuthorized)
    })(req, res, next)
}

export default passport;    