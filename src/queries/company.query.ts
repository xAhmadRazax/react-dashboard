import {
  getCompanies,
  getCompany,
  addCompany,
  updateCompany,
  deleteCompany,
} from "@/lib/api"
import type { addCompanyDTO } from "@/types/dashboard.types"
import { mutationOptions, queryOptions } from "@tanstack/react-query"

export const getCompaniesQueryOptions = ({
  page,
  itemsPerPage,
}: {
  page: number
  itemsPerPage: number
}) =>
  queryOptions({
    queryKey: ["companies", page],
    queryFn: () => getCompanies({ page, itemsPerPage }),
  })

export const getCompanyQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["companies", id],
    queryFn: () => getCompany(id),
  })

export const createCompanyMutationOptions = mutationOptions({
  mutationKey: ["companies", "create"],
  mutationFn: (user: addCompanyDTO) => addCompany(user),
})

export const updateCompanyMutationOptions = (id: string) =>
  mutationOptions({
    mutationKey: ["companies", "update", id],
    mutationFn: (user: addCompanyDTO) => updateCompany(id, user),
  })
export const deleteCompanyMutationOptions = (id: string) =>
  mutationOptions({
    mutationFn: () => deleteCompany(id),
  })
