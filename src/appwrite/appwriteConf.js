import { Client, Account, Databases, ID } from "appwrite";
import conf from "../conf/conf";

export const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(client);
export const databases = new Databases(client, "65d30f40b275f33cf7b4");
export { ID } from "appwrite";
