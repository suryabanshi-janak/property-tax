import * as z from 'zod';

export const AuthValidator = z.object({
  username: z.string().min(1, {
    message: 'Username is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export type AuthRequestData = z.infer<typeof AuthValidator>;
