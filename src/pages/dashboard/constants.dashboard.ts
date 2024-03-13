import { Model, Param } from '@/pages/dashboard/types.dashboard'

export const params: Param[] = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string',
  },
  {
    id: 3,
    name: 'Ширина',
    type: 'string',
  },
]

export const model: Model = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
    {
      paramId: 3,
      value: 'мини',
    },
  ],
}
