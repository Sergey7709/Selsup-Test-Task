type ParamType = 'list' | 'number' | 'string'
export interface Param {
  id: number
  name: string
  type: ParamType
}

export interface ParamValue {
  paramId: number
  value: (number | string)[] | number | string
}

export interface Model {
  paramValues: ParamValue[]
}

export type FieldEditorProps = {
  handleInputChange: (id: number, index: number, newValue: number | string) => void
  label: string
  param: Param
  paramValues: ParamValue[]
  typeField: 'number' | 'string'
}

export type SelectorEditorProps = {
  model: Model
} & Omit<FieldEditorProps, 'label' | 'typeField'>
