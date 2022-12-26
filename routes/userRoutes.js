import { Router } from 'express';
import passport from '../auth/auth.js';

const userRouter = Router();

// authentification
userRouter.post('/signup', passport.authenticate('signup', { session: false}), async(req,res,next) => {
        res.json({
            message: 'Signup OK',
            user: req.user
        });
        next();
    }
);

export default userRouter;