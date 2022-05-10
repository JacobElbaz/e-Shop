import * as yup from 'yup';

export const addressFormValidationSchema = yup.object({
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    postalCode: yup.number(),
    appartment: yup.string().required('Country is required'),
  });

  export const paymentFormValidationSchema = yup.object({
    creditCard: yup.number().required('Address is required'),
    ID: yup.number().required('City is required'),
    expiredDate: yup.date(),
    CVV: yup.number().required('Country is required'),
  });