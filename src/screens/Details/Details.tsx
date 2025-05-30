import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Details = (): JSX.Element => {
  const navigate = useNavigate();

  const bookingData = {
    vehicle: "Honda Bike",
    rating: "5.0",
    trips: 8,
    fromDate: "5/30/2025",
    fromTime: "10:00 AM",
    toDate: "6/12/2025",
    toTime: "11:00 AM",
    location: "Akita, 12-3",
    mapImageUrl: "https://www.google.com/maps/vt/data=0AXG9GM5xh05rsBJ3ZTcYGbKNJjktV5ljeN_UcoZMZd8fScadGGjhvtFxcAhulORiIBmjGnFmgkyI5A9fUj1aMA21iOpb2QSJfMdX30MA1lQGhVqxhULWG8_4xpcxapKn4gCmXRC4IvSnUV0IUHmO_xviX4yS8_5Zq1FjLynwppUIyoX8NAdaSmnRqNzQir-R_rmht_OfggzE2BXhD3hznoBV9XfclXqgrwtAS1xh6p2jb4LRz-nZUxC2YK8CCAcbbGp0vfUIYg6hE32oVK5G_Zao8wcIsEV",
    imageUrl: "/25-cb1300superboldorsp-1.png",
  };

  return (
    <div className="min-h-screen bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[402px] min-h-screen relative">
        <header className="sticky top-0 bg-white pt-8 px-5 z-10">
          <button 
            className="flex items-center"
            onClick={() => navigate('/')}
          >
            <ArrowLeftIcon className="w-[30px] h-[30px]" />
          </button>

          <h1 className="mt-6 font-['Inter'] font-medium text-black text-[40px]">
            Details
          </h1>
        </header>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <main className="px-6 py-6">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <img
                    className="w-[163px] h-24 object-cover"
                    alt="Honda Motorcycle"
                    src={bookingData.imageUrl}
                  />
                  <div className="ml-6">
                    <div className="font-medium text-xl font-['Inter']">
                      {bookingData.vehicle}
                    </div>
                    <div className="font-normal text-sm text-gray-600 font-['Inter'] mt-1">
                      {bookingData.rating} ({bookingData.trips} trips)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-10">
              <div className="mb-8">
                <div className="font-semibold text-lg font-['Barlow']">
                  From
                </div>
                <div className="flex gap-3 mt-2">
                  <div className="font-normal text-xl font-['Barlow']">
                    {bookingData.fromDate}
                  </div>
                  <div className="font-normal text-xl font-['Barlow'] ml-10">
                    {bookingData.fromTime}
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold text-lg font-['Barlow']">
                  TO
                </div>
                <div className="flex gap-3 mt-2">
                  <div className="font-normal text-xl font-['Barlow']">
                    {bookingData.toDate}
                  </div>
                  <div className="font-normal text-xl font-['Barlow'] ml-10">
                    {bookingData.toTime}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-['Inter'] font-medium mb-4">
                Place
              </h2>
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={16/9} className="rounded-lg overflow-hidden mb-4">
                      <img
                        src={bookingData.mapImageUrl}
                        alt="Location Map"
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="flex justify-between items-center">
                      <span className="font-['Inter'] text-lg">
                        {bookingData.location}
                      </span>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          bookingData.location
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-['Inter'] hover:text-blue-800 transition-colors"
                      >
                        &gt; Google Map
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg mt-10 mb-6"
              onClick={() => navigate('/my-account')}
            >
              Cancel
            </Button>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
};