import { useEffect, useState } from "react"

type useFetchProps = {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE"
  body: Record<string, unknown>
}

export function useFetch(props: useFetchProps) {
  const [data, setData] = useState<Record<string, unknown> | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      try {
        setLoading(true)

        const res = await fetch(props.url, {
          method: props.method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(props.body),
          signal: controller.signal,
        })

        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }

        const result = await res.json()
        setData(result)
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err?.message ?? "An error occurred")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [props.url, props.method, props.body])

  return { data, loading, error }
}
