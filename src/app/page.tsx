import Link from "next/Link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello world</h1>
        <p>Go To <Link href="/dashboard">Dashboard</Link></p>
      </div>
    </main>
  )
}
