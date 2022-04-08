import User from "@/models/User";
import e, { NextFunction, Request, Response } from "express";
import { formatter } from "@/responseFormatter";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
  
import authenticateJWT from "@/middlewares/Token";

export default {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.find();
      res.json(formatter("GET USER", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  getWithId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.json(formatter("GET USER", user));
      return;
    } catch (error) {
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token;
      const user = await User.findOne({ email: req.body.email });
      if (await argon2.verify(user.password, req.body.password)) {
        const signature = process.env.SECRET_KEY;
        token = {
          token: jwt.sign(
            { email: user.email, username: user.username, id: user._id },
            signature!
          ),
        };
      }
      res.json(formatter("LOGIN USER", token));
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.json(formatter("DELETE USER"));
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.create({
        email: req.body.email,
        password: await argon2.hash(req.body.password),
        username: req.body.username,
      })
      res.json(formatter("POST USER"));
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.updateOne(
        { _id: req.params.id },
        {
          email: req.body.email,
          password: await argon2.hash(req.body.password),
          username: req.body.username,
        }
      );
      res.json(formatter("PATCH USER"));
      return;
    } catch (error) {
      next(error);
    }
  },
};

