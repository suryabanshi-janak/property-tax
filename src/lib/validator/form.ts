import * as z from 'zod';

export const FormValidator = z.object({
  bigha: z.string(),
  katha: z.string(),
  dhur: z.string(),
  landType: z.string().min(1, {
    message: 'कृप्या कुनै एक क्षेत्र छान्नुहोस्',
  }),
  isLandEmpy: z.boolean(),
  houseLength: z.string().optional(),
  houseBreadth: z.string().optional(),
  houseStory: z.string().optional(),
  houseType: z.string().optional(),
});

export type FormRequestData = z.infer<typeof FormValidator>;
