// components/forms/FormField.tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  min?: number
  defaultValue?: string | number
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  min,
  defaultValue,
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        min={min}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className="block rounded-sm px-2 py-2 text-base ring-1 ring-primary/40 outline-none focus-visible:ring-primary/80"
        required={required}
      />
    </Field>
  )
}
