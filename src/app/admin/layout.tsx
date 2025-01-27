import { Badge } from "@/components/ui/badge";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={`antialiased bg-stone-200 flex`}>
          <div className="bg-white h-screen w-[205px]">
            <div className="p-4">
              <p className="text-lg font-semibold">NomNom</p>
              <p className="text-[#71717A]">Swift Delivery</p>
              <div className="flex flex-col items-start gap-7 mt-5">
                <Badge className="w-[165px] h-[40px] rounded-full bg-screen text-black hover:bg-black hover:text-white">Food menu</Badge>
                <Badge  className="w-[165px] h-[40px] rounded-full  bg-screen text-black hover:bg-black hover:text-white">Order</Badge>
                <Badge  className="w-[165px] h-[40px] rounded-full  bg-screen text-black hover:bg-black hover:text-white">Settings</Badge>
              </div>
            </div>
          </div>
      
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <div>
              <div>
                 <UserButton />
              </div>
        

              {children}
            </div>
            
            
          </SignedIn>

        </div>
    );
  }
  