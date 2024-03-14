import { Model, Param } from '@/pages/dashboard/types.dashboard'

export const paramsString: Param[] = [
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

export const modelString: Model = {
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


export const paramsNumber: Param[] = [
  {
    id: 1,
    name: 'Высота',
    type: 'number',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'number',
  },
  {
    id: 3,
    name: 'Ширина',
    type: 'number',
  },
]

export const modelNumber: Model = {
  paramValues: [
    {
      paramId: 1,
      value: 100,
    },
    {
      paramId: 2,
      value: 1000,
    },
    {
      paramId: 3,
      value: 500,
    },
  ],
}


export const paramsStringArray: Param[] = [
  {
    id: 1,
    name: 'Цвет',
    type: 'list',
  },
]

export const modelStringArray: Model = {
  paramValues: [
    {
      paramId: 1,
      value: ['Красный', 'Зеленый', 'Синий'],
    },
  ],
}
