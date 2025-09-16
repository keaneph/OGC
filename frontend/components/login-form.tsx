import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import logo from "@/public/images/logo.png"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex min-h-screen">
      
      <div className="hidden md:block md:w-1/2 h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/login-img-2.png')" }}>
      </div>

     
      <div className="flex w-full flex-col justify-center px-8 md:w-2/3">
        <div className="mx-auto w-full max-w-md space-y-6">
         
          <div className="text-center">
            <Image
              src={logo}
              alt="MSU-IIT OGC"
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-6 text-2xl font-bold">Log in to your account</h2>
          </div>

         
          <Button variant="outline" className="w-full">
            Continue with My.IIT
          </Button>

          
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xs text-gray-500">or login as admin</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

         
          <form className="space-y-4">
            <div>
              <Input id="email" type="text" placeholder="Email address or username" required />
            </div>
            <div>
              <Input id="password" type="password" placeholder="Password" required />
              <a href="#" className="mt-1 block text-sm text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-red-700 hover:bg-red-800">
              Continue
            </Button>
          </form>


          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </div>
          <div className="text-center text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Go back to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}