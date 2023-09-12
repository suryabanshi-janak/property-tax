import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

import { calculateTotalTax } from '@/lib/utils';
import { TaxData } from './LandForm';

interface Props {
  open: boolean;
  onClose: () => void;
  data: TaxData | undefined;
}

export default function TaxResultDialog({ open, onClose, data }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>करको विवरण</DialogTitle>
        </DialogHeader>

        <div>
          <div className='flex items-center justify-between w-full mt-4'>
            <p>जग्गाको कर</p>
            <h2 className='font-semibold text-lg text-black min-w-[80px]'>
              रु. {data?.landTax}
            </h2>
          </div>
          {data?.houseTax ? (
            <>
              <Separator className='my-4' />
              <div className='flex items-center justify-between w-full'>
                <p>घरको कर</p>
                <h2 className='font-semibold text-lg text-black min-w-[80px]'>
                  रु. {data?.houseTax}
                </h2>
              </div>
            </>
          ) : null}
          <Separator className='my-4' />
          <div className='flex items-center justify-between w-full mt-4'>
            <p>जम्मा कर</p>
            <h2 className='font-semibold text-lg text-black min-w-[80px]'>
              रु. {calculateTotalTax(data)}
            </h2>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
