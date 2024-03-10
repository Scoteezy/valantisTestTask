import { z } from 'zod';

export const priceSchema = z.number({
  invalid_type_error: 'Цена должна быть числом!',

}).positive({
  message: 'Число должно быть положительным!'
})
  .optional();
