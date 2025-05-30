import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

interface Booking {
  id: string;
  vehicle: string;
  rating: string;
  trips: number;
  fromDate: string;
  fromTime: string;
  toDate: string;
  toTime: string;
  imageUrl: string;
}

const bookings: Booking[] = [
  {
    id: '1',
    vehicle: "Honda Bike",
    rating: "5.0",
    trips: 8,
    fromDate: "5/30/2025",
    fromTime: "10:00 AM",
    toDate: "6/12/2025",
    toTime: "11:00 AM",
    imageUrl: "/25-cb1300superboldorsp-1.png",
  },
  {
    id: '2',
    vehicle: "Honda Bike",
    rating: "5.0",
    trips: 8,
    fromDate: "5/30/2025",
    fromTime: "10:00 AM",
    toDate: "6/12/2025",
    toTime: "11:00 AM",
    imageUrl: "/25-cb1300superboldorsp-2.png",
  }
];

const BookingCard: React.FC<{ booking: Booking; onClick: () => void }> = ({ booking, onClick }) => (
  <Card 
    className="mb-6 cursor-pointer hover:shadow-sm transition-shadow"
    onClick={onClick}
  >
    <CardContent className="p-6">
      <div className="flex items-start">
        <img
          src={booking.imageUrl}
          alt={booking.vehicle}
          className="w-[163px] h-24 object-cover"
        />
        <div className="ml-4">
          <h3 className="text-xl font-['Inter']">{booking.vehicle}</h3>
          <p className="text-sm mt-1 text-gray-600">
            {booking.rating} ({booking.trips} trips)
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-4">
          <div className="font-semibold text-lg font-['Barlow']">From</div>
          <div className="flex gap-3 mt-2">
            <div className="text-xl font-['Barlow']">{booking.fromDate}</div>
            <div className="text-xl font-['Barlow'] ml-10">{booking.fromTime}</div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-lg font-['Barlow']">TO</div>
          <div className="flex gap-3 mt-2">
            <div className="text-xl font-['Barlow']">{booking.toDate}</div>
            <div className="text-xl font-['Barlow'] ml-10">{booking.toTime}</div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const IphonePro = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[402px] min-h-screen relative">
        <header className="sticky top-0 bg-white pt-8 px-5 z-10">
          <button 
            className="flex items-center"
            onClick={() => navigate(-1)}
          >
            <ArrowLeftIcon className="w-[30px] h-[30px]" />
          </button>

          <h1 className="mt-6 font-['Inter'] font-medium text-black text-[40px]">
            Booking
          </h1>

          <p className="mt-10 font-medium text-lg font-['Inter']">
            Not confirmed yet.
          </p>
        </header>

        <ScrollArea className="h-[calc(100vh-200px)] px-5">
          <div className="py-6">
            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onClick={() => navigate('/details')}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};