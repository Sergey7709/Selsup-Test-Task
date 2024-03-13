type ParamType = 'number' | 'select' | 'string'
type OptionsType = number[] | string[]
export interface Param {
  id: number
  name: string
  options?: OptionsType
  type: ParamType
}

export interface ParamValue {
  paramId: number
  value: string
}

export interface Model {
  paramValues: ParamValue[]
}
