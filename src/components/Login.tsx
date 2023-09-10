import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthRequestData, AuthValidator } from '@/lib/validator/auth';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

export function Login({ setToken }: { setToken: (token: string) => void }) {
  const form = useForm<AuthRequestData>({
    resolver: zodResolver(AuthValidator),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: AuthRequestData) => {
    const { username, password } = data;

    if (username === 'rim@dai' && password === 'Rim@0910') {
      setToken(crypto.randomUUID());
    }
  };

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle className='text-center text-lg'>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} type='text' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Continue
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
