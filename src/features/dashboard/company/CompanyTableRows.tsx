import { TableCell, TableRow } from "@/components/ui/table"
import { UpdateCompanyButton } from "./UpdateCompanyButton"
import { DeleteCompanyButton } from "./DeleteCompanyButton"

interface CompanyTableRowProps {
  index: number
  id: string
  name: string
  email: string
  address: string
  logo?: string
}

export const CompanyTableRow = ({
  index,
  id,
  name,
  email,
  address,
  logo,
}: CompanyTableRowProps) => {
  console.log(id)
  return (
    <TableRow className="transition-colors hover:bg-muted/40">
      <TableCell className="ps-4 font-medium">{index}</TableCell>
      <TableCell className="font-medium">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          "N/A"
        )}
      </TableCell>
      <TableCell className="font-medium">{email}</TableCell>

      <TableCell>{name}</TableCell>

      <TableCell>{address}</TableCell>

      <TableCell colSpan={2} className="pe-4">
        <div className="flex justify-end gap-2">
          <UpdateCompanyButton company={{ id, name, email, address, logo }} />
          <DeleteCompanyButton id={id} name={name} />
        </div>
      </TableCell>
    </TableRow>
  )
}
