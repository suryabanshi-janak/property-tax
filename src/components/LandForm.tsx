import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import TaxResultDialog from './TaxResultDialog';
import LandFormContent from './form/LandFormContent';
import HouseFormContent from './form/HouseFormContent';

import { calculateTotalTax } from '@/lib/calculator';
import { FormRequestData, FormValidator } from '@/lib/validator/form';

export interface TaxData {
  houseTax: number;
  landTax: number;
}

export function LandForm() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [taxData, setTaxData] = React.useState<TaxData>();

  const form = useForm<FormRequestData>({
    resolver: zodResolver(FormValidator),
    defaultValues: {
      bigha: '',
      katha: '',
      dhur: '',
      landType: '',
      isLandEmpy: false,
      houseLength: '',
      houseBreadth: '',
      houseStory: '1',
      houseType: '',
    },
  });

  function onSubmit(values: FormRequestData) {
    const taxes = calculateTotalTax(values);
    setTaxData(taxes);
    form.reset();
    setOpen(true);
  }

  return (
    <>
      <Card className=''>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <LandFormContent form={form} />
              <HouseFormContent form={form} />

              <Button type='submit'>हिसाब गर्नुहोस</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <TaxResultDialog
        open={open}
        onClose={() => setOpen(false)}
        data={taxData}
      />
    </>
  );
}
