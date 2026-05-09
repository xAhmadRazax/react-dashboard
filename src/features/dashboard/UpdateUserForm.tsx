import { FormField } from "@/components/form/FormField"
import { SubmitButton } from "@/components/form/SubmitButton"
import { useUser } from "./hooks/useUser"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useUpdateUserMutation } from "./hooks/useUpdateUserMutation"
import { useQueryClient } from "@tanstack/react-query"
import type { UserType } from "@/types/dashboard.types"

interface UpdateUserFormProps {
  userId: string
  onSuccess: () => void
}

export const UpdateUserForm = ({ onSuccess, userId }: UpdateUserFormProps) => {
  const queryClient = useQueryClient()
  const { data, isLoading: isFetchingUser } = useUser(userId)
  const { updateUserMutation, isLoading: isUpdatingUser } =
    useUpdateUserMutation(userId)

  const name = data?.name ?? ""
  const email = data?.email ?? ""
  const age = data?.age ?? ""

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const age = formData.get("age") as string

    updateUserMutation(
      { name, email, age: +age },
      {
        onSuccess: (updated: UserType) => {
          console.log(updated)
          queryClient.setQueryData(["users", userId], updated)
          queryClient.setQueryData(["users"], (old: { data: UserType[] }) => ({
            ...old,
            data: old.data.map((u) => (u.id === updated.id ? updated : u)),
          }))

          onSuccess?.()
        },
      }
    )
  }

  if (isFetchingUser || isUpdatingUser) {
    return <div>IsLoading</div>
  }

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="mb-2 text-xl text-primary">
          Update User
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        {/* field container */}
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          defaultValue={email}
        />
        {/* field container */}
        <FormField
          label="Name"
          name="name"
          placeholder="John Doe"
          required
          defaultValue={name}
        />
        {/* ifield container */}

        <FormField
          label="Age"
          name="age"
          type="number"
          placeholder="18"
          required
          defaultValue={age}
          min={0}
        />
        {/* buttons container */}
        <div className="mt-4 flex justify-end">
          <SubmitButton
            isLoading={isFetchingUser || isUpdatingUser}
            children="Update User"
          />
        </div>
      </form>
    </>
  )
}
