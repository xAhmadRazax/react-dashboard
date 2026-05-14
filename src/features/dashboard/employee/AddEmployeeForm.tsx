import Form from "@/components/form/Form"
import { useFormDialog } from "../hooks/useFormDialog"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCreateUserMutation } from "./hooks/useCreateUserMutation"
import { useQueryClient } from "@tanstack/react-query"

export const AddEmployeeForm = () => {
  const { createUserMutation, isLoading: isCreatingUser } =
    useCreateUserMutation()

  const queryClient = useQueryClient()

  const { onSuccess } = useFormDialog()

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const age = formData.get("age") as string

    createUserMutation(
      {
        name,
        email,
        age: +age,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["users"],
          })

          onSuccess()
        },
      }
    )
  }

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="mb-2 text-xl text-primary">
          Add Employee
        </DialogTitle>
      </DialogHeader>

      <Form onSubmit={onSubmitHandler}>
        <Form.Field>
          <Form.Label>Email</Form.Label>

          <Form.Input
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            disabled={isCreatingUser}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Name</Form.Label>

          <Form.Input
            name="name"
            placeholder="John Doe"
            required
            disabled={isCreatingUser}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Age</Form.Label>

          <Form.Input
            name="age"
            type="number"
            placeholder="18"
            required
            min={0}
            disabled={isCreatingUser}
          />
        </Form.Field>

        <Form.Actions>
          <Form.Submit disabled={isCreatingUser}>
            {isCreatingUser ? "Adding Employee..." : "Add Employee"}
          </Form.Submit>
        </Form.Actions>
      </Form>
    </>
  )
}
