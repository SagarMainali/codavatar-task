import ProgressBarIndicator from "../components/ProgressBarIndicator"
import FormPageSecond from "../components/FormPageSecond"

export default function MultiStepProcessForm() {

  return (
    <div className="bg-primary-light-bg py-6 flex flex-col gap-8 items-center">
      <h2 className="text-center font-semibold text-[20px]">Multi-Step Process Form Assignment</h2>
      <ProgressBarIndicator />
      <FormPageSecond />
    </div>
  )
}