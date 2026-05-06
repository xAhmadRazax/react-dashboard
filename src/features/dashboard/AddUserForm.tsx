import { addNewUser } from "@/lib/api"

import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface AddUserFormProps {
  onSuccess: () => void
}

export const AddUserForm = ({ onSuccess }: AddUserFormProps) => {
  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const age = formData.get("age") as string

    await addNewUser({ name, email, age: +age })

    onSuccess()
  }

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="mb-2 text-xl">Add New User</DialogTitle>
      </DialogHeader>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        {/* field container */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className=":outline-red-700 block rounded-sm px-2 py-2 text-base ring-1 ring-primary/40 outline-none focus-visible:ring-primary/80"
            required
          />
        </Field>
        {/* field container */}
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            placeholder="John"
            className=":outline-red-700 block rounded-sm px-2 py-2 text-base ring-1 ring-primary/40 outline-none focus-visible:ring-primary/80"
            required
          />
        </Field>
        {/* ifield container */}
        <Field>
          <FieldLabel htmlFor="age">Age</FieldLabel>
          <Input
            id="age"
            name="age"
            type="number"
            min={18}
            placeholder="20"
            className=":outline-red-700 block rounded-sm px-2 py-2 text-base ring-1 ring-primary/40 outline-none focus-visible:ring-primary/80"
            required
          />
        </Field>

        {/* buttons container */}
        <div className="mt-4 flex justify-end">
          <Button
            type="submit"
            className={
              "cursor-pointer rounded-sm bg-green-700 px-2 py-2 ring ring-primary/40 transition-colors hover:bg-green-800 hover:ring-primary/80"
            }
          >
            Add User
          </Button>
        </div>
      </form>
    </>
  )
}
