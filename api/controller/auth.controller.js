import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res,next) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser = new User({ name, email, password:hashedPassword});
  try{
    await newUser.save();
    res.status(201).json({"message":"data saved successfully"})
  }
  catch(error){
    next(error) // no need to write separately everytime the res.status().json() coode we have written a middleware in index.js
    // next(errorHandler)  for the custom errors

  }
 
};

export const signin = async (req,res,next)=>{
  const {email,password} = req.body;
  try{
    const validuser = await User.findOne({email});
    if(!validuser) return next(errorHandler(404,'User Not Found'))
    const validPassword = bcryptjs.compareSync(password,validuser.password);
    if(!validPassword) return next(errorHandler(401,'wrong credentials'))
    const token = jwt.sign({id:validuser._id},process.env.JWT_SECRET)
    const {password:hashedPassword,...rest} = validuser._doc;
    const expiryDate = new Date(Date.now()+3600000);
    res.cookie('access_token',token,{httpOnly:true, expires:expiryDate}).status(200).json(rest);
  }
 catch(error){
  next(error)
 }
 
}