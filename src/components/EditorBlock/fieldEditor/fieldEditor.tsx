import { FC } from 'react'

import { TextField } from '@/components/ui/text-field'
import { FieldEditorProps } from '@/pages/dashboard/types.dashboard'

import s from './fieldEditor.module.scss'

export const FieldEditor: FC<FieldEditorProps> = ({
  handleInputChange,
  param,
  paramValues,
  typeField,
}) => {
  const valueParam = paramValues.find(paramValue => paramValue.paramId === param.id)?.value || ''

  return (
    <div className={s.wrapperFieldEditor}>
      {Array.isArray(valueParam) ? (
        valueParam.map((value: number | string, index: number) => (
          <TextField
            key={index}
            onValueChange={newValue =>
              handleInputChange(
                param.id,
                index,
                typeof value === 'string' ? newValue : Number(newValue)
              )
            }
            type={typeField}
            value={value}
          />
        ))
      ) : (
        <TextField
          onChange={e => handleInputChange(param.id, 0, e.target.value)}
          type={typeField}
          value={valueParam}
        />
      )}
    </div>
  )
}
