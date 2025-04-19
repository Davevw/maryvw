
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Calendar } from "lucide-react";

const ClassSchedule = () => {
  const scheduleData = [
    {
      day: "Monday",
      time: "8:00 AM",
      class: "Upper Body Strength",
      format: "Zoom Only",
      notes: "30-minute class"
    },
    {
      day: "Tuesday",
      time: "9:00 AM",
      class: "Stretch & Breath",
      format: "In-Person (Seacliff Residents) + Zoom",
      notes: "30-minute class"
    },
    {
      day: "Wednesday",
      time: "8:00 AM",
      class: "Combo (Balance, Core, Weights)",
      format: "Zoom Only",
      notes: "Trainer's choice mix"
    },
    {
      day: "Thursday",
      time: "8:00 AM",
      class: "Stretch",
      format: "Zoom Only",
      notes: "30-minute class"
    },
    {
      day: "Friday",
      time: "8:00 AM",
      class: "Lower Body Strength",
      format: "Zoom Only",
      notes: "30-minute class"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Calendar className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-serif text-center">Weekly Class Schedule</h2>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.day}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.class}</TableCell>
                  <TableCell>{item.format}</TableCell>
                  <TableCell>{item.notes}</TableCell>
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
