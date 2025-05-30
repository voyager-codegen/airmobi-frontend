import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const Message = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[402px] min-h-screen relative">
        <header className="sticky top-0 bg-white pt-8 px-5 z-10">
          <button 
            className="flex items-center"
            onClick={() => navigate('/my-account')}
          >
            <ArrowLeftIcon className="w-[30px] h-[30px]" />
          </button>

          <h1 className="mt-6 font-['Inter'] font-medium text-black text-[40px]">
            Message
          </h1>
        </header>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <main className="px-6 py-6">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0 space-y-6">
                <Textarea
                  className="min-h-[150px] resize-none"
                  placeholder="Type your message here..."
                />
                
                <Textarea
                  className="min-h-[150px] resize-none"
                  placeholder="Additional notes..."
                />
                
                <Textarea
                  className="min-h-[150px] resize-none"
                  placeholder="Special requests..."
                />

                <Button
                  className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg mt-4 mb-6"
                  onClick={() => navigate('/')}
                >
                  Check your booking
                </Button>
              </CardContent>
            </Card>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
};