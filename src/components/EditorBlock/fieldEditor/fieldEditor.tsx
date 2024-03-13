import { FC } from 'react'

import { TextField } from '@/components/ui/text-field'
import { Param, ParamValue } from '@/pages/dashboard/types.dashboard'

type fieldEditorProps = {
  handleInputChange: (id: number, value: string) => void
  label: string
  param: Param
  paramValues: ParamValue[]
  typeField: 'number' | 'string'
}
export const FieldEditor: FC<fieldEditorProps> = ({
  handleInputChange,
  label,
  param,
  paramValues,
  typeField,
}) => {
  return (
    <div>
      <TextField
        label={label}
        onChange={e => handleInputChange(param.id, e.target.value)}
        type={typeField}
        value={paramValues.find(paramValue => paramValue.paramId === param.id)?.value || ''}
      />
    </div>
  )
}
