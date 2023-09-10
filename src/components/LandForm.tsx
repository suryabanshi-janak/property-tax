import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { LAND_RATE } from '@/data';
// import { Checkbox } from './ui/checkbox';

export type FormData = z.infer<typeof formSchema>;

const formSchema = z.object({
  bigha: z.string(),
  katha: z.string(),
  dhur: z.string().min(1, {
    message: 'आवश्यक',
  }),
  landType: z.string().min(1, {
    message: 'कृप्या कुनै एक क्षेत्र छान्नुहोस्',
  }),
  // isLandEmpy: z.boolean(),
  houseLength: z.string().optional(),
  houseBreadth: z.string().optional(),
  houseStory: z.string().optional(),
});

export function LandForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bigha: '',
      katha: '',
      dhur: '',
      landType: '',
      // isLandEmpy: false,
      houseLength: '',
      houseBreadth: '',
      houseStory: '1',
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
  }

  return (
    <Card className=''>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div>
              <CardHeader className='px-0'>
                <CardTitle className='text-lg'>जग्गाको विवरण</CardTitle>
              </CardHeader>
              <div className='flex flex-col space-y-4'>
                <div>
                  <FormLabel className='font-semibold text-base'>
                    जग्गा
                  </FormLabel>
                  <div className='flex items-start gap-8 mt-2'>
                    <FormField
                      control={form.control}
                      name='bigha'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center gap-2'>
                            <FormControl>
                              <Input
                                placeholder=''
                                {...field}
                                className='w-24'
                                type='number'
                              />
                            </FormControl>
                            <FormDescription>विघा</FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='katha'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center gap-2'>
                            <FormControl>
                              <Input
                                placeholder=''
                                {...field}
                                className='w-24'
                                type='number'
                              />
                            </FormControl>
                            <FormDescription>कट्ठा</FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='dhur'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center gap-2'>
                            <FormControl>
                              <Input
                                placeholder=''
                                {...field}
                                className='w-24'
                                type='number'
                              />
                            </FormControl>
                            <FormDescription>धुर</FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name='landType'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold text-base'>
                        क्षेत्र
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select' />
                          </SelectTrigger>
                          <SelectContent position='popper'>
                            {LAND_RATE.map((land) => (
                              <SelectItem key={land.type} value={land.type}>
                                {land.type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* <FormField
              control={form.control}
              name='isLandEmpy'
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center gap-2'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <h4 className='font-semibold text-sm'>खाली जग्गा</h4>
                  </div>
                </FormItem>
              )}
            /> */}

            <div>
              <CardHeader className='px-0'>
                <CardTitle className='text-lg'>घरको विवरण</CardTitle>
              </CardHeader>

              <div className='flex flex-col space-y-4'>
                <div>
                  <FormLabel className='font-semibold text-base'>
                    घरको नााप{' '}
                    <span className='text-sm font-normal'>(feet मा)</span>
                  </FormLabel>
                  <div className='flex items-start gap-6 mt-2'>
                    <FormField
                      control={form.control}
                      name='houseLength'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center gap-2'>
                            <FormControl>
                              <Input
                                placeholder=''
                                {...field}
                                className='w-24'
                                type='number'
                              />
                            </FormControl>
                            <FormDescription>लम्बाई</FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='houseBreadth'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center gap-2'>
                            <FormControl>
                              <Input
                                placeholder=''
                                {...field}
                                className='w-24'
                                type='number'
                              />
                            </FormControl>
                            <FormDescription>चौडाई</FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name='houseStory'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold text-base'>
                        तल्ला
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder=''
                          {...field}
                          className='w-24'
                          type='number'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
