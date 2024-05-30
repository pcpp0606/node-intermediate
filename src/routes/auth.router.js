import express from 'express';
import bcrypt from 'bcrypt';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js';
import { prisma } from '../utils/prisma.util.js';
import { HASH_SALT_ROUNDS } from '../constants/auth.constant.js';

const authRouter = express.Router();

authRouter.post('/sign-up', signUpValidator, async (req, res, next) => {
    try {
        const { email, password, name } = req.body;

        const existedUser = await prisma.user.findUnique({ where: { email } });

        // 이메일이 중복된 경우
        if (existedUser) {
            return res.status(HTTP_STATUS.CONFLICT).json({
                status: HTTP_STATUS.CONFLICT,
                message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
            });
        }

        const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);

        const data = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            }
        });

        return res.status(HTTP_STATUS.CREATED).json({
            status: HTTP_STATUS.CREATED,
            message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
            data,
        });
    } catch (error) {
        next(error);
    }
});

export { authRouter };