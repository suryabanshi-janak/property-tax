import { type UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { HOUSE_RATE } from '@/data';
import { FormRequestData } from '@/lib/validator/form';

export default function HouseFormContent({
  form,
}: {
  form: UseFormReturn<FormRequestData>;
}) {
  return (
    <div>
      <FormField
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
              <h4 className='text-sm font-semibold'>खाली जग्गा</h4>
            </div>
          </FormItem>
        )}
      />

      <CardHeader className='px-0 py-4'>
        <CardTitle className='text-lg'>घरको विवरण</CardTitle>
      </CardHeader>

      <div className='flex flex-col space-y-4'>
        <div>
          <FormLabel className='text-base font-semibold'>
            घरको नाप <span className='text-sm font-normal'>(वर्ग फिटमा)</span>
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
                        {...field}
                        placeholder='00'
                        className='w-24'
                        disabled={form.getValues('isLandEmpy')}
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
                        {...field}
                        placeholder='00'
                        className='w-24'
                        disabled={form.getValues('isLandEmpy')}
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
              <FormLabel className='text-base font-semibold'>
                घरको तल्ला
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='w-24'
                  type='number'
                  step={0.5}
                  min={0}
                  disabled={form.getValues('isLandEmpy')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='houseType'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base font-semibold'>
                घरको किसिम
              </FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={form.getValues('isLandEmpy')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    {HOUSE_RATE.map((house) => (
                      <SelectItem key={house.type} value={house.type}>
                        {house.type}
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
