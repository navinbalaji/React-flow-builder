import * as jwt from "jsonwebtoken";
import { baseResponseModel } from "../common";
import { Request, Response, NextFunction } from "express";

const secretKey = process.env.JWT_SECRET_KEY;


export const middlewareFunction = (req: any, res: Response, next: NextFunction) => {
    const authorization = req.headers["authorization"];

    if (!authorization) {
        return res.status(401).json(baseResponseModel(false, "Unauthorized"));
    }

    let token: string[] | undefined | string = authorization?.split(" ");

    if (!token || token.length === 0) {
        return res.status(401).json(baseResponseModel(false, "Unauthorized"));
    }
    token = token[1];

    if (!secretKey) {
        return res.status(401).json(baseResponseModel(false, "Secret key is not configured"));
    }

    jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
            console.log(err);
            return res.status(403).json(baseResponseModel(false, "Token is not valid"));
        }
        req.userId = decoded.username;
        req.role = decoded.role;
        next();
    });
};