import { type UseFormReturn } from 'react-hook-form';
import { FormRequestData } from '@/lib/validator/form';

import { CardHeader, CardTitle } from '@/components/ui/card';
import {
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
} from '@/components/ui/select';

import { LAND_RATE } from '@/data';

export default function LandFormContent({
  form,
}: {
  form: UseFormReturn<FormRequestData>;
}) {
  return (
    <div>
      <CardHeader className='px-0 py-4'>
        <CardTitle className='text-lg'>जग्गाको विवरण</CardTitle>
      </CardHeader>
      <div className='flex flex-col space-y-4'>
        <div>
          <FormLabel className='text-base font-semibold'>जग्गा</FormLabel>
          <div className='flex items-start gap-8 mt-2'>
            <FormField
              control={form.control}
              name='bigha'
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center gap-2'>
                    <FormControl>
                      <Input
                        placeholder='00'
                        {...field}
                        className='w-24'
                        type='number'
                        min={0}
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
                        placeholder='00'
                        {...field}
                        className='w-24'
                        type='number'
                        min={0}
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
                        placeholder='00'
                        {...field}
                        className='w-24'
                        type='number'
                        min={0}
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
              <FormLabel className='text-base font-semibold'>क्षेत्र</FormLabel>
              <FormControl>
                <Select
                  {...field}
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
  );
}
