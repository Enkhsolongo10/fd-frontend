import { Badge } from "@/components/ui/badge";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton
} from '@clerk/nextjs'

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={`antialiased bg-stone-200 flex`}>
          <div className="bg-white h-[screen] w-[205px] flex flex-col items-center">
            <div className="w-[170px] h-[44px] flex items-center gap-3 mt-10">
                <img className="w-[36px] h-[29.18px]" src="headerLogo.png"/>
                <div>
                    <div className="flex">
                        <p className="text-black text-xl font-semibold">NomNom</p>
                    </div>
                    <p className="text-[#71717A] text-sm">Swift Delivery</p>   
                </div>
            </div>
              <div className="flex flex-col items-start gap-7 mt-5">
                <Badge className="w-[165px] h-[40px] rounded-full bg-screen text-black hover:bg-black hover:text-white">Food menu</Badge>
                <Badge  className="w-[165px] h-[40px] rounded-full  bg-screen text-black hover:bg-black hover:text-white">Order</Badge>
                <Badge  className="w-[165px] h-[40px] rounded-full  bg-screen text-black hover:bg-black hover:text-white">Settings</Badge>
              </div>
            </div>
        
      
          <SignedOut>
            <SignInButton>
              <button className="bg-black w-[100px] h-[50px] text-white rounded-lg">Log in</button>
            </SignInButton>

            <SignUpButton>
              <button className="bg-black w-[100px] h-[50px] text-white rounded-lg">Sign up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <div>

              <div className="h-[30px] w-full bg-[#18181B1] flex justify-end mt-5">
                 <UserButton />
              </div>

              {children}
            </div>
          </SignedIn>

        </div>
    )
  };
  