import { FormField } from "@/components/form/FormField"
import { SubmitButton } from "@/components/form/SubmitButton"
import { useUser } from "./hooks/useUser"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useUpdateUserMutation } from "./hooks/useUpdateUserMutation"
import { useQueryClient } from "@tanstack/react-query"
import type { UserType } from "@/types/dashboard.types"
import { FormSkeleton } from "./FormSkeleton"

interface UpdateUserFormProps {
  userId: string
  onSuccess: () => void
}

export const UpdateUserForm = ({ onSuccess, userId }: UpdateUserFormProps) => {
  const queryClient = useQueryClient()
  const { data, isLoading: isFetchingUser, error } = useUser(userId)
  const { updateUserMutation, isLoading: isUpdatingUser } =
    useUpdateUserMutation(userId)

  const name = data?.name ?? ""
  const email = data?.email ?? ""
  const age = data?.age ?? ""

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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

  // Show loading skeleton while fetching user
  if (isFetchingUser) {
    return <FormSkeleton title="Update User" rows={3} />
  }

  // Show error state
  if (error) {
    return (
      <>
        <DialogHeader className="text-center">
          <DialogTitle className="mb-2 text-xl text-primary">
            Update User
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <div className="text-center text-destructive">
            <p className="font-semibold">Failed to load user data</p>
            <p className="text-sm text-muted-foreground">{error?.message}</p>
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="mb-2 text-xl text-primary">
          Update User
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          defaultValue={email}
          disabled={isUpdatingUser}
        />

        <FormField
          label="Name"
          name="name"
          placeholder="John Doe"
          required
          defaultValue={name}
          disabled={isUpdatingUser}
        />

        <FormField
          label="Age"
          name="age"
          type="number"
          placeholder="18"
          required
          defaultValue={age}
          min={0}
          disabled={isUpdatingUser}
        />

        <div className="mt-4 flex justify-end gap-2">
          <SubmitButton
            isLoading={isUpdatingUser}
            loadingText="Updating User"
            children="Update User"
          />
        </div>
      </form>
    </>
  )
}
