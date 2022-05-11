import {Request, Response} from 'express';
import { User } from '../entities';

export const getUsers = async(req:Request,res:Response) => {

    try {
        const users = await User.find();

        res.status(200).json({
            "users": users
        });
    } catch (error) {

        console.log(error);

        res.status(500).json({
            "ok": false,
            "message": "Error. Please Try again."
        })

    }

}

export const getUser = async(req:Request, res:Response) => {

    const { id } = req.params;

    try {
        
        const user = await User.findOneBy({id: parseInt(id)});

        if(!user) return res.status(204).json({})
    
        res.status(200).json({
            "ok": true,
            user
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            "ok": false,
            "message": "Error. Please Try again."
        })

    }

}

export const createUser = async(req:Request,res:Response) => {

    const { firstname, lastname, } = req.body;

    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;

    try {

        const createdUser = await user.save();

        res.status(201).json({
            "ok": true,
            "user": createdUser,
            "message": 'The user has been created'
        });

    } catch (error) {
                
        console.log(error);

        res.status(500).json({
            "ok": false,
            "message": "Error. Please Try again."
        })

    }

}

export const deleteUser = async(req:Request, res:Response) => {

    const { id } = req.params;

    try {
        
        const user = await User.findOneBy({id: parseInt(id)});

        if(!user) return res.status(204).json({})
        
        await user.remove();
    
        res.status(200).json({
            "ok": true,
            "message": "The user has been deleted"
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            "ok": false,
            "message": "Error. Please Try again."
        })

    }

}

export const updateUser = async(req:Request, res:Response) => {

    const { id } = req.params;

    try {
        
        const user = await User.findOneBy({id: parseInt(id)});

        if(!user) return res.status(204).json({})
        
        const body = req.body;
    
        if(body.firstname) user.firstname = body.firstname;
        if(body.lastname) user.lastname = body.lastname;
    
        const updatedUser = await user.save();
    
        res.status(200).json({
            "ok": true,
            "user": updatedUser,
            "message": "The user has been updated"
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            "ok": false,
            "message": "Error. Please Try again."
        })

    }

}