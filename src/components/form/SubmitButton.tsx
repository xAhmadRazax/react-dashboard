// components/forms/SubmitButton.tsx
import { Button } from "@/components/ui/button"

interface SubmitButtonProps {
  children?: React.ReactNode
  isLoading?: boolean
}

export const SubmitButton = ({
  children = "Submit",
  isLoading = false,
}: SubmitButtonProps) => {
  return (
    <div className="mt-4 flex justify-end">
      <Button
        type="submit"
        disabled={isLoading}
        className="cursor-pointer rounded-sm bg-green-600 px-4 py-2 text-primary transition-colors hover:bg-green-600/80 disabled:opacity-50"
      >
        {isLoading ? "Loading..." : children}
      </Button>
    </div>
  )
}
