import { Model, Optional } from 'sequelize';
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
}
export {};
