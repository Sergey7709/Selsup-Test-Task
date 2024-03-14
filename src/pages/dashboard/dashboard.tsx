import { EditorBlock } from '@/components/EditorBlock'
import { Typography } from '@/components/ui/typography'
import {
  modelNumber,
  modelString,
  modelStringArray,
  paramsNumber,
  paramsString,
  paramsStringArray,
} from '@/pages/dashboard/constants.dashboard'

import s from './dashboard.module.scss'

export const Dashboard = () => {
  return (
    <div className={s.wrapper_panel}>
      <div className={s.wrapper_header_typography}>
        <Typography className={s.header_typography} variant={'h3'}>
          В решении реализована функциональность передачи не только текстовых данных, но и числовых,
          а также списков значений, тип которых определяется структурой params и model.
        </Typography>
      </div>
      <Typography className={s.title_typography} variant={'subtitle1'}>
        Пример текстовых данных
      </Typography>
      <EditorBlock model={modelString} params={paramsString} />
      <Typography className={s.title_typography} variant={'subtitle1'}>
        Пример числовых данных
      </Typography>
      <EditorBlock model={modelNumber} params={paramsNumber} />
      <Typography className={s.title_typography} variant={'subtitle1'}>
        Пример списка текстовых данных
      </Typography>
      <EditorBlock model={modelStringArray} params={paramsStringArray} />
    </div>
  )
}
