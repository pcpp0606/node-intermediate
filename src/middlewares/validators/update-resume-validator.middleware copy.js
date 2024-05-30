import Joi from 'joi';
import { MESSAGES } from '../../constants/message.constant.js';
import { MIN_RESUME_LENGTH } from '../../constants/resume.constant.js';

const schema = Joi.object({
    title: Joi.string(),
    content: Joi.string().min(MIN_RESUME_LENGTH).required().messages({
        'string.min': MESSAGES.RESUMES.COMMON.CONTENT.MIN_LENGTH,
    }),
}).min(1).messages({ // title, content 둘 중에 하나는 들어가야 한다.
    'object.min': MESSAGES.RESUMES.UPDATE.NO_BODY_DATE,
});

export const updateResumeValidator = async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        next(error);
    }
}