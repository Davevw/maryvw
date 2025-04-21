
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Calendar } from "lucide-react";

const ClassSchedule = () => {
  const scheduleData = [
    {
      day: "M",
      time: "8 AM",
      type: "Yoga Ball Strength",
      format: "Zoom",
      length: "30 mins"
    },
    {
      day: "T",
      time: "9 AM",
      type: "Stretch & Breath",
      format: "Zoom + (Sea Cliff Residents)",
      length: "60 mins"
    },
    {
      day: "W",
      time: "8 AM",
      type: "Yoga Ball Balance",
      format: "Zoom",
      length: "30 mins"
    },
    {
      day: "Th",
      time: "8 AM",
      type: "Stretch",
      format: "Zoom",
      length: "30 mins"
    },
    {
      day: "Fr",
      time: "8 AM",
      type: "Yoga Ball Core",
      format: "Zoom",
      length: "30 mins"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Calendar className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-serif text-center">Weekly Class Schedule</h2>
        </div>
        
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Energetic and motivating group classes including yoga and strength training that build community while helping participants achieve their fitness goals.
        </p>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Length</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.day}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.format}</TableCell>
                  <TableCell>{item.length}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
