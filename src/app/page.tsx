import { requireAuth } from "@/lib/auth-utils"

const Page = async () => {

  const session = await requireAuth();

  return (
    <div className='min-h-screen flex flex-col px-4'>
      {session && <>
      logged in
      </>}
    </div>
  )
}

export default Page
