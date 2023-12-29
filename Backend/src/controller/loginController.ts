import jwt from "jsonwebtoken";
import { ADMIN, baseResponseModel } from "../common";
import { Request, Response } from "express";

const secretKey = process.env.JWT_SECRET_KEY;
const appUsername = process.env.APP_USERNAME;
const appPassword = process.env.APP_PASSWORD;

export const loginController = (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            throw new Error("Either Username or password is missing");
        }

        if (!secretKey) {
            throw new Error("Secret key is not configured");
        }

        if (username !== appUsername || password !== appPassword) {
            throw new Error("Invalid username or password. Please try again");
        }

        const payload = {
            username,
            role: ADMIN
        };

        // Create and sign the JWT
        jwt.sign(payload, secretKey, { expiresIn: "1h" }, (err: any, token: any) => {
            if (err) {
                res.status(500).json(baseResponseModel(false, "Failed to generate token"));
            } else {
                res.status(200).json(baseResponseModel(true, "Signin Successfully", { token }));
            }
        });
    } catch (err: any) {
        return res.status(404).json(baseResponseModel(false, err?.message, null, err));
    }
};