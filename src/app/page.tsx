import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import {LogIn} from "lucide-react"

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
  <div className="w-screen min-h-screen bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
          <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
          <UserButton afterSwitchSessionUrl="/"/>
        </div>

        <div className="flex mt-2">
        {isAuth &&(<Button>Go to chats</Button>)}
        </div>

        <p className="max-w-xl mt-1 text-lg text-slate-600">
            join millions of students,researchers,and professionals to instantly anwer question
            and understand reascher with AI  
        </p>

        <div className="w-full mt-4" >
          {isAuth ? (<h1>fileupload</h1>):(
            <Link href= '/sign-in'>
              <Button>Login to get started!
                <LogIn className="w-4 h-4 ml-2"></LogIn>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
    
  )
}
