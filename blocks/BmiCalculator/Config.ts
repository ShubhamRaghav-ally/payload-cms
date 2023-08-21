import { Block } from 'payload/types';
import RichText from '../../components/RichText';
export const BMI: Block = {
  slug: 'bmi',
  labels: {
    singular: 'Bmi',
    plural: 'Bmi Blocks',
  },
  fields: [
    {
      name: 'create',
      type: 'richText',
      required: true,
    },
    {
        type: 'row',
        fields: [
          {
            name: 'height',
            type: 'text',
            required: true,
          },
          {
            name: 'weight',
            type: 'text',
            required: true,
          }
        ],
      },
  ],
};


export default BMI;
