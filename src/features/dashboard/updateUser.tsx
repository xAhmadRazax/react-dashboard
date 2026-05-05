import { Label } from "@/components/ui/label"
import { getUser, updateUser } from "@/lib/api"
import { Button } from "@base-ui/react/button"
import { Input } from "@base-ui/react/input"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export const UpdateUser = () => {
  const navigate = useNavigate()
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

    const res = await updateUser(id!, { name, email, age: +age })

    return navigate("/")
  }

  if (isLoading) {
    return <div>IsLoading</div>
  }

  return (
    <div className="mx-auto flex h-screen items-center justify-center">
      <section className="min-w-140 rounded-xl border bg-neutral-700 px-4 py-4 backdrop-blur-3xl">
        <header className="text-center">
          <h2 className="mb-2 text-xl">Add New User</h2>
        </header>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          {/* input field container */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="john@example.com"
              required
            />
          </div>
          {/* input field container */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Name</Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder="john"
              required
            />
          </div>
          {/* input field container */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="25"
              required
              value={age}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAge(e.target.value)
              }
            />
          </div>

          {/* buttons container */}
          <div className="flex justify-between">
            <Button onClick={() => navigate("/")} className={"cursor-pointer"}>
              Go Back
            </Button>
            <Button type="submit" className={"cursor-pointer"}>
              update User
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}
