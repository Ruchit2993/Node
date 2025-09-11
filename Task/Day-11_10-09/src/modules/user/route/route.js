import express from 'express';
const router = express.Router();

router.get("/greet", (req, res) => {
    const user ={
        Greet : "Hellow.........."
    }
    return res.json(user);
});

export default router;
