import Link from "next/link"
export default async function Page() {
    return (
        <div>
            Dashboard
            <Link key="student" href="/dashboard/student">
                Student Page
            </Link>
        </div>
    )
}