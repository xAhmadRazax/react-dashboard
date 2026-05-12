import Form from "@/components/form/Form"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useQueryClient } from "@tanstack/react-query"
import { useCreateCompanyMutation } from "./hooks/useCreateCompanyMutation"

interface AddCompanyFormProps {
  onSuccess: () => void
}

export const AddCompanyForm = ({ onSuccess }: AddCompanyFormProps) => {
  const { createCompanyMutation, isLoading: isCreatingCompany } =
    useCreateCompanyMutation()

  const queryClient = useQueryClient()

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const address = formData.get("address") as string
    // const logo = formData.get("logo") as File

    // get the file upload

    createCompanyMutation(
      {
        name,
        email,
        address,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["companies"],
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
          Add Company
        </DialogTitle>
      </DialogHeader>

      <Form onSubmit={onSubmitHandler}>
        <Form.Field>
          <Form.Label htmlFor="email">Email</Form.Label>

          <Form.Input
            id={"email"}
            name="email"
            type="email"
            placeholder="jcompany@example.com"
            required
            disabled={isCreatingCompany}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="name">Name</Form.Label>

          <Form.Input
            id={"name"}
            name="name"
            placeholder="tech company"
            required
            disabled={isCreatingCompany}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="address">Address</Form.Label>

          <Form.Input
            name="Address"
            type="text"
            placeholder="123 Main Street, Lahore"
            required
            min={0}
            disabled={isCreatingCompany}
          />
        </Form.Field>

        {/* <Form.Field>
          <Form.Label htmlFor="logo">Logo</Form.Label>

          <Form.Input
            id={"logo"}
            name="Logo"
            type="file"
            disabled={isCreatingUser}
          />
        </Form.Field> */}

        <Form.Actions>
          <Form.Submit disabled={isCreatingCompany}>
            {isCreatingCompany ? "Adding Company..." : "Add Company"}
          </Form.Submit>
        </Form.Actions>
      </Form>
    </>
  )
}
