import { FormField } from "@/components/form/FormField"
import { SubmitButton } from "@/components/form/SubmitButton"
import { getUser, updateUser } from "@/lib/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const UpdateUser = () => {
  const { id } = useParams()

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUser(id!)
      setName(res.name)
      setEmail(res.email)
      setAge(String(res.age))
    }
    fetchData()
  }, [id])

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const age = formData.get("age") as string

    try {
      setIsLoading(true)
      await updateUser(id!, { name, email, age: +age })
    } catch (error) {
      console.error("Error updating user:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div>IsLoading</div>
  }

  return (
    <div className="mx-auto flex h-screen items-center justify-center">
      <section className="min-w-140 rounded-xl border bg-neutral-700 px-4 py-4 backdrop-blur-3xl">
        <header className="text-center">
          <h2 className="mb-2 text-xl">Update User</h2>
        </header>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          {/* field container */}
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* field container */}
          <FormField
            label="Name"
            name="name"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* ifield container */}

          <FormField
            label="Age"
            name="age"
            type="number"
            placeholder="18"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min={0}
          />
          {/* buttons container */}
          <div className="mt-4 flex justify-end">
            <SubmitButton children="Update User" />
          </div>
        </form>
      </section>
    </div>
  )
}
