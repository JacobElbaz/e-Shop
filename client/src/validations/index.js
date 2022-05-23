import * as yup from 'yup';

export const addressFormValidationSchema = yup.object({
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    postalCode: yup.number().required('ZIP Code required'),
    appartment: yup.number().required('Appartment number is reqired'),
  });

  export const paymentFormValidationSchema = yup.object({
    creditCard: yup.string().min(16).max(16).matches(/([0-9]{16})/, 'Invalid number').required('Credit card number is required'),
    ID: yup.string().min(9).max(9).matches(/([0-9]{9})/, 'Invalid ID').required('ID is required'),
    expiredDate: yup.string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Not a valid expiration date. Example: MM/YY'
    )
    .required('Expiration date is required')
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Date has past',
      expirationDate => {
        if (!expirationDate) {
          return false
        }
  
        const today = new Date()
        const monthToday = today.getMonth() + 1
        const yearToday = today
          .getFullYear()
          .toString()
          .substr(-2)
  
        const [expMonth, expYear] = expirationDate.split('/')
  
        if (Number(expYear) < Number(yearToday)) {
          return false
        } else if (
          Number(expMonth) < monthToday &&
          Number(expYear) <= Number(yearToday)
        ) {
          return false
        }
  
        return true
      }
    )
    .test(
      'test-credit-card-expiration-date',
      'Invalid Expiration Month',
      expirationDate => {
        if (!expirationDate) {
          return false
        }
        const today = new Date()
          .getFullYear()
          .toString()
          .substr(-2)
  
        const [expMonth] = expirationDate.split('/')
  
        if (Number(expMonth) > 12) {
          return false
        }
  
        return true
      }
    ),
    CVV: yup.string().min(3).max(3).required('CVV is required'),
  });

  export const profileFormValidationSchema = yup.object({
    name: yup.string().required('Name is required'),
    password: yup.string().min(6, 'Required at least 6 characters'),
    confirmPassword: yup.string().min(6, 'Required at least 6 characters'),
  });

  export const forgotPassordValidationSchema = yup.object({
    email: yup.string().required('email is required'),
    password: yup.string().min(6, 'Required at least 6 characters'),
    
  });

  export const productFormValidationSchema = yup.object({
    name: yup.string().required('Name is required'),
    price: yup.number().min(1).required('Price is required'),
    countInStock: yup.number().min(1).required('Count in stock is required'),
    description: yup.string().required('Description is required'),
  });