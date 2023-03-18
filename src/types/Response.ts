import { User } from "./User";

export type Response = {
    status: number;
    desc?: string;
    foundUser?: User;
}