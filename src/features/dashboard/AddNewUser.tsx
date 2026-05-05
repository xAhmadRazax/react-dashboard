import { Label } from "@/components/ui/label"
import { addNewUser } from "@/lib/api"
import { Button } from "@base-ui/react/button"
import { Input } from "@base-ui/react/input"
import { useNavigate } from "react-router"

export const AddNewUser = () => {
  const navigate = useNavigate()

  const onSubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    console.log(formData)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const age = formData.get("age") as string

    console.log(name, email, age)

    const res = await addNewUser({ name, email, age: +age })

    if (res.status === 201) {
      return navigate("/")
    }
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
              placeholder="john@example.com"
              required
            />
          </div>
          {/* input field container */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Name</Label>
            <Input id="name" name="name" placeholder="john" required />
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
            />
          </div>

          {/* buttons container */}
          <div className="flex justify-between">
            <Button onClick={() => navigate("/")} className={"cursor-pointer"}>
              Go Back
            </Button>
            <Button type="submit" className={"cursor-pointer"}>
              Add User
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}
