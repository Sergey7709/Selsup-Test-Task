import { EditorBlock } from '@/components/EditorBlock'
import { model, params } from '@/pages/dashboard/constants.dashboard'

export const Dashboard = () => {
  return (
    <>
      <EditorBlock model={model} params={params} />
    </>
  )
}
