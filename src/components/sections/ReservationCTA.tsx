import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ReservationCTA() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="py-24 bg-background border-t border-border/20">
      <div className="container px-4 mx-auto text-center space-y-8">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Reserve Your Table
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Experience the warmth of the hearth. Reservations are recommended 2 weeks in advance for weekend dining.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg tracking-widest uppercase">
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-center">Reservation</DialogTitle>
              <DialogDescription className="text-center">
                Select your preferred date and time.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-border"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Input id="guests" type="number" min="1" max="8" defaultValue="2" className="bg-background border-border" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" defaultValue="19:00" className="bg-background border-border" />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Confirm Booking</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export default ReservationCTA;
