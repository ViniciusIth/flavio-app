import { UserAuth } from './user-auth.schema';
export interface User {
  id: string;
  name: string;
  email: string;
  birthdate: Date;
  auth?: UserAuth;
}
