import { FC } from 'react'

import { TextField } from '@/components/ui/text-field'
import { Param, ParamValue } from '@/pages/dashboard/types.dashboard'

type StringFieldEditorProps = {
  handleInputChange: (id: number, value: string) => void
  label: string
  param: Param
  paramValues: ParamValue[]
}
export const StringFieldEditor: FC<StringFieldEditorProps> = ({
  handleInputChange,
  label,
  param,
  paramValues,
}) => {
  return (
    <div>
      <TextField
        label={label}
        onChange={e => handleInputChange(param.id, e.target.value)}
        type={'text'}
        value={paramValues.find(paramValue => paramValue.paramId === param.id)?.value || ''}
      />
    </div>
  )
}
