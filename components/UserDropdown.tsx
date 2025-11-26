"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import NavItems from "./NavItems";
import { LogOut } from "lucide-react";

const UserDropdown = () => {
  const router = useRouter();
  const handleSingOut = async () => {
    router.push("/sign-in");
  };
  const user = { name: "John", email: "wwwwwww@fed.com" };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-4 hover:text-yellow-500 "
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa7e20ba-6080-4916-b43b-374b65bd32f1/dfoi4eo-68fd3845-788c-48ef-964d-26c280a0e736.png/v1/fill/w_861,h_928,q_70,strp/stolas_by_mrm0rtis_dfoi4eo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAzMiIsInBhdGgiOiIvZi9mYTdlMjBiYS02MDgwLTQ5MTYtYjQzYi0zNzRiNjViZDMyZjEvZGZvaTRlby02OGZkMzg0NS03ODhjLTQ4ZWYtOTY0ZC0yNmMyODBhMGU3MzYucG5nIiwid2lkdGgiOiI8PTM3NDQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.teje7b1HxtYOc58RfMAnpFVEG_citQ9rr0CYCtFXb64" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
            {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
                {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
            <div className="relative flex items-center gap-3 py-2">
        <Avatar className="h-10 w-10">
            <AvatarImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa7e20ba-6080-4916-b43b-374b65bd32f1/dfoi4eo-68fd3845-788c-48ef-964d-26c280a0e736.png/v1/fill/w_861,h_928,q_70,strp/stolas_by_mrm0rtis_dfoi4eo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAzMiIsInBhdGgiOiIvZi9mYTdlMjBiYS02MDgwLTQ5MTYtYjQzYi0zNzRiNjViZDMyZjEvZGZvaTRlby02OGZkMzg0NS03ODhjLTQ4ZWYtOTY0ZC0yNmMyODBhMGU3MzYucG5nIiwid2lkdGgiOiI8PTM3NDQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.teje7b1HxtYOc58RfMAnpFVEG_citQ9rr0CYCtFXb64" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
            {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-400">
                {user.name}
            </span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
       </div>
        </DropdownMenuLabel>
       <DropdownMenuSeparator className="bg-gray-500"/>
       <DropdownMenuItem onClick={()=>handleSingOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors  cursor-pointer">
        <LogOut className="h-4 w-4 hidden sm:block"/>
        Logout
       </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block dg-gray-600"/>
      <nav className="sm:hidden">
        <NavItems/>
      </nav>
      </DropdownMenuContent>
     
    </DropdownMenu>
  );
};

export default UserDropdown;
