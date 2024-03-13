import { FC, useState } from 'react'

import { FieldEditor } from '@/components/EditorBlock/fieldEditor'
import { Model, Param, ParamValue } from '@/pages/dashboard/types.dashboard'

import s from './editorBlock.module.scss'

interface Props {
  model: Model
  params: Param[]
}

export const EditorBlock: FC<Props> = ({ model, params }) => {
  const { paramValues: initialParamValues } = model

  const [paramValues, setParamValues] = useState<ParamValue[]>(initialParamValues || [])

  const [showParamValues, setShowParamValues] = useState(false)

  const handleInputChange = (paramId: number, index: number, newValue: string) => {
    setParamValues(prevState =>
      prevState.map(paramValue =>
        paramValue.paramId === paramId
          ? {
              ...paramValue,
              value: Array.isArray(paramValue.value)
                ? paramValue.value.map((v, i) => (i === index ? newValue : v))
                : newValue,
            }
          : paramValue
      )
    )
  }

  const getModel = () => {
    setShowParamValues(!showParamValues)
  }

  return (
    <div className={s.wrapperEditorBlock}>
      {params.map(param => (
        <div className={s.wrapperEditorField} key={param.id}>
          <label>{param.name}</label>
          {param.type === 'string' && (
            <FieldEditor
              handleInputChange={handleInputChange}
              label={param.name}
              param={param}
              paramValues={paramValues}
              typeField={'string'}
            />
          )}
          {param.type === 'number' && (
            <FieldEditor
              handleInputChange={handleInputChange}
              label={param.name}
              param={param}
              paramValues={paramValues}
              typeField={'number'}
            />
          )}
          {param.type === 'list' && (
            <FieldEditor
              handleInputChange={handleInputChange}
              label={param.name}
              param={param}
              paramValues={paramValues}
              typeField={'string'}
            />
          )}
        </div>
      ))}
      <button onClick={getModel} type={'button'}>
        Show Param Values
      </button>
      {showParamValues && (
        <ul>
          {paramValues.map(paramValue => (
            <li key={paramValue.paramId}>
              Param ID: {paramValue.paramId}, Value:
              {Array.isArray(paramValue.value)
                ? `[${paramValue.value.join(', ')}]`
                : paramValue.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
