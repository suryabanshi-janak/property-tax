import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

import { calculateTotalTax } from '@/lib/utils';
import { TaxData } from './LandForm';
import { FormRequestData } from '@/lib/validator/form';

interface Props {
  open: boolean;
  onClose: () => void;
  data: TaxData | undefined;
  formData: FormRequestData | undefined;
  resetFormData: () => void;
}

export default function TaxResultDialog({
  open,
  onClose,
  data,
  formData,
  resetFormData,
}: Props) {
  const handleClose = () => {
    onClose();
    resetFormData();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <div className='mt-4 space-y-4'>
          <section>
            <DialogHeader>
              <DialogTitle>जग्गाको विवरण</DialogTitle>
            </DialogHeader>
            <div>
              <div className='flex items-center justify-between w-full mt-4'>
                <p>जग्गाको क्षेत्रफल</p>
                <div className='space-x-3 font-medium text-black'>
                  {formData?.bigha && <span>{formData.bigha} विघा</span>}
                  {formData?.katha && <span>{formData.katha} कट्ठा</span>}
                  {formData?.dhur && <span>{formData.dhur} धुर</span>}
                </div>
              </div>
              <div className='flex items-center justify-between w-full mt-4'>
                <p>जग्गाको क्षेत्र</p>
                <p className='font-medium text-black'>{formData?.landType}</p>
              </div>
            </div>
          </section>

          {!formData?.isLandEmpy && (
            <section>
              <DialogHeader>
                <DialogTitle>घरको विवरण</DialogTitle>
              </DialogHeader>
              <div>
                <div className='flex items-center justify-between w-full mt-4'>
                  <p>घरको क्षेत्रफल</p>
                  <div className='space-x-2 font-medium text-black'>
                    <span>{formData?.houseLength}</span>
                    <span>x</span>
                    <span>{formData?.houseBreadth} वर्ग फिट</span>
                  </div>
                </div>
                <div className='flex items-center justify-between w-full mt-4'>
                  <p>घरको तल्ला</p>
                  <p className='font-medium text-black'>
                    {formData?.houseStory} तल्ला
                  </p>
                </div>
                <div className='flex items-center justify-between w-full mt-4'>
                  <p>घरको क्षेत्र</p>
                  <p className='font-medium text-black'>
                    {formData?.houseType}
                  </p>
                </div>
              </div>
            </section>
          )}

          <section>
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
                  <Separator className='my-3' />
                  <div className='flex items-center justify-between w-full'>
                    <p>घरको कर</p>
                    <h2 className='font-semibold text-lg text-black min-w-[80px]'>
                      रु. {data?.houseTax}
                    </h2>
                  </div>
                </>
              ) : null}
              <Separator className='my-3' />
              <div className='flex items-center justify-between w-full mt-4'>
                <p>जम्मा कर</p>
                <h2 className='font-semibold text-lg text-black min-w-[80px]'>
                  रु. {calculateTotalTax(data)}
                </h2>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
