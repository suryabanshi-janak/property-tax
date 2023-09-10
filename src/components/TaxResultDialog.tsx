import { TaxData } from './LandForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Separator } from './ui/separator';

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
          <div className='w-full flex items-center justify-between mt-4'>
            <p>जग्गाको कर</p>
            <h2 className='font-semibold text-lg text-black min-w-[80px]'>
              रु. {data?.landTax}
            </h2>
          </div>
          {data?.houseTax ? (
            <>
              <Separator className='my-4' />
              <div className='w-full flex items-center justify-between'>
                <p>घरको कर</p>
                <h2 className='font-semibold text-lg text-black min-w-[80px]'>
                  रु. {data?.houseTax}
                </h2>
              </div>
            </>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
