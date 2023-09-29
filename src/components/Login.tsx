import * as React from 'react';
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
  const [error, setError] = React.useState('');

  const form = useForm<AuthRequestData>({
    resolver: zodResolver(AuthValidator),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: AuthRequestData) => {
    const { username, password } = data;

    if (username.toLowerCase() === 'ward no 6' && password === '9815498808') {
      setToken(crypto.randomUUID());
    } else {
      setError('Invalid username or password');
    }
  };

  React.useEffect(() => {
    if (error) setError('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch().username]);

  React.useEffect(() => {
    if (error) setError('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch().password]);

  return (
    <>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle className='text-lg text-center'>Login</CardTitle>
          {error && (
            <p className='text-sm font-semibold text-center text-red-400'>
              {error}
            </p>
          )}
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

              <Button
                type='submit'
                className='w-full bg-blue-500 hover:bg-blue-600'
              >
                Continue
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
