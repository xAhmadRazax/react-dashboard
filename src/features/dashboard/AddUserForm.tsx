import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormField } from "@/components/form/FormField"
import { SubmitButton } from "@/components/form/SubmitButton"
import { useCreateUserMutation } from "./hooks/useCreateUserMutation"
import { useQueryClient } from "@tanstack/react-query"

interface AddUserFormProps {
  onSuccess: () => void
}

export const AddUserForm = ({ onSuccess }: AddUserFormProps) => {
  const { createUserMutation, isLoading: isCreatingUser } =
    useCreateUserMutation()
  const queryClient = useQueryClient()

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const age = formData.get("age") as string

    createUserMutation(
      { name, email, age: +age },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["users"] })
          onSuccess()
        },
      }
    )
  }

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="mb-2 text-xl text-primary">
          Add New User
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          disabled={isCreatingUser}
        />

        <FormField
          label="Name"
          name="name"
          placeholder="John Doe"
          required
          disabled={isCreatingUser}
        />

        <FormField
          label="Age"
          name="age"
          type="number"
          placeholder="18"
          required
          min={0}
          disabled={isCreatingUser}
        />

        <div className="mt-4 flex justify-end gap-2">
          <SubmitButton
            isLoading={isCreatingUser}
            loadingText="Adding User"
            children="Add User"
          />
        </div>
      </form>
    </>
  )
}
