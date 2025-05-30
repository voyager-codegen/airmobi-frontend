import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

export const MyAccount = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[402px] min-h-screen relative">
        <header className="sticky top-0 bg-white pt-8 px-5 z-10">
          <button 
            className="flex items-center"
            onClick={() => navigate('/details')}
          >
            <ArrowLeftIcon className="w-[30px] h-[30px]" />
          </button>

          <h1 className="mt-6 font-['Inter'] font-medium text-black text-[40px]">
            My Account
          </h1>
        </header>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <main className="px-6 py-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="license">License</Label>
                <Input id="license" placeholder="Enter your license number" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="creditCard">Credit Card</Label>
                <Input id="creditCard" placeholder="Enter your credit card number" />
              </div>

              <div className="space-y-4">
                <Button
                  variant="destructive"
                  className="w-full h-14 text-lg mb-6"
                  onClick={() => navigate('/message')}
                >
                  退会する
                </Button>
              </div>
            </div>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
};