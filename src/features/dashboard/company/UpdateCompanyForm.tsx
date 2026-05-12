import Form from "@/components/form/Form"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useQueryClient } from "@tanstack/react-query"
import type { CompanyType } from "@/types/dashboard.types"
import { useSearchParams } from "react-router"
import { useUpdateCompanyMutation } from "./hooks/useUpdateCompany"

interface UpdateCompanyFormProps {
  company: CompanyType
  companyId: string
  onSuccess: () => void
}

export const UpdateCompanyForm = ({
  onSuccess,
  companyId,
  company,
}: UpdateCompanyFormProps) => {
  const queryClient = useQueryClient()

  const [searchParams] = useSearchParams()

  const { updateCompanyMutation, isLoading: isUpdatingCompany } =
    useUpdateCompanyMutation(companyId)

  const name = company?.name ?? ""
  const email = company?.email ?? ""
  const address = company?.address ?? ""

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const address = formData.get("address") as string

    updateCompanyMutation(
      {
        name,
        email,
        address,
      },
      {
        onSuccess: (updated: CompanyType) => {
          onSuccess?.()

          queryClient.setQueryData(["companies", companyId], updated)

          const page = searchParams.get("page") || "1"

          queryClient.setQueryData(
            ["companies", +page],
            (old: { data: CompanyType[] }) => ({
              ...old,
              data: old.data.map((u) => (u.id === updated.id ? updated : u)),
            })
          )
        },
      }
    )
  }

  return (
    <>
      <DialogHeader className="text-center">
        <DialogTitle className="mb-2 text-xl text-primary">
          Update Employee
        </DialogTitle>
      </DialogHeader>

      <Form onSubmit={onSubmitHandler}>
        <Form.Field>
          <Form.Label>Email</Form.Label>

          <Form.Input
            name="email"
            type="email"
            placeholder="company@example.com"
            defaultValue={email}
            disabled={isUpdatingCompany}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Name</Form.Label>

          <Form.Input
            name="name"
            placeholder="John Doe"
            required
            defaultValue={name}
            disabled={isUpdatingCompany}
          />
        </Form.Field>

        <Form.Field>
          <Form.Label>Address</Form.Label>

          <Form.Input
            name="address"
            type="text"
            placeholder="123 Main Street, Lahore"
            required
            defaultValue={address}
            disabled={isUpdatingCompany}
          />
        </Form.Field>

        <Form.Actions>
          <Form.Submit disabled={isUpdatingCompany}>
            {isUpdatingCompany ? "Updating Company..." : "Update Company"}
          </Form.Submit>
        </Form.Actions>
      </Form>
    </>
  )
}
