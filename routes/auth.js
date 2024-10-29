import express from 'express'
import passport from 'passport'
const router = express.Router()

router.get("/google",passport.authenticate('google'),(req,res)=> res.send(200))
router.get("/google/redirect",passport.authenticate('google'),(req,res)=> res.send(200))
export default router