import { Schema, model } from 'mongoose';

export type UserProps = {
  _id: string;
  name: string;
  email: string;
  password?: string;
}


export const UserSchemaProps = new Schema<Omit<UserProps, "_id">>(
  {
    name: String,
    email: String,
    password: String,
    
  }, 
  {
    timestamps: true
  }
) 

export const DBUSER = model<Omit<UserProps, "_id">>('user', UserSchemaProps, 'user');