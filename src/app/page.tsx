import { Button } from "@/components/ui/button";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server";

const Page = async () => {

  const session = await requireAuth();

  const data = await caller.getUsers();
  return (
    <div className='min-h-screen flex flex-col px-4'>
      {session && <>
        logged in
      </>}
      {
        JSON.stringify(data)
      }
      <LogoutButton />
    </div>
  )
}

export default Page
