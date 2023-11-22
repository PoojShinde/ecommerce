import mangoose from 'mongoose';
import  Colors  from 'colors';
import dotenv from 'dotenv';

const  connectDB = async () =>{
    try{
        const conn = await mangoose.connect(process.env.MONGO_URL)

    }catch(error){
        console.log(`Error in mangodb ${error}`.bgRed.white)
    }
};

export default connectDB;
