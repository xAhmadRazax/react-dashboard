import React from "react"
import DataTable from "../components/DataTable"

export const CompaniesTableHeader = () => {
  return (
    <DataTable.Header>
      <DataTable.Column className="min-w-15">No.</DataTable.Column>
      <DataTable.Column className="min-w-20">Logo.</DataTable.Column>
      <DataTable.Column className="w-62.5">Email</DataTable.Column>
      <DataTable.Column className="w-37.5">Name</DataTable.Column>
      <DataTable.Column className="min-w-20">Address</DataTable.Column>
      <DataTable.Column className="w-15 text-right">Actions</DataTable.Column>
    </DataTable.Header>
  )
}
