import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User } from "lucide-react";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "01:00 - 02:00",
    "02:00 - 03:00",
  ];

  // Sample timetable data
  const timetableData: Record<string, Record<string, { subject: string; faculty: string; room: string; type: "lecture" | "lab" }>> = {
    Monday: {
      "09:00 - 10:00": { subject: "Data Structures", faculty: "Dr. Smith", room: "A-101", type: "lecture" },
      "10:00 - 11:00": { subject: "Database Systems", faculty: "Prof. Johnson", room: "A-102", type: "lecture" },
      "12:00 - 01:00": { subject: "Break", faculty: "", room: "", type: "lecture" },
      "02:00 - 03:00": { subject: "Web Development Lab", faculty: "Dr. Williams", room: "Lab-1", type: "lab" },
    },
    Tuesday: {
      "09:00 - 10:00": { subject: "Algorithms", faculty: "Dr. Brown", room: "B-201", type: "lecture" },
      "11:00 - 12:00": { subject: "Operating Systems", faculty: "Prof. Davis", room: "A-103", type: "lecture" },
      "12:00 - 01:00": { subject: "Break", faculty: "", room: "", type: "lecture" },
      "01:00 - 02:00": { subject: "Networks Lab", faculty: "Dr. Miller", room: "Lab-2", type: "lab" },
    },
    Wednesday: {
      "09:00 - 10:00": { subject: "Software Engineering", faculty: "Prof. Wilson", room: "A-104", type: "lecture" },
      "10:00 - 11:00": { subject: "AI & ML", faculty: "Dr. Moore", room: "B-202", type: "lecture" },
      "12:00 - 01:00": { subject: "Break", faculty: "", room: "", type: "lecture" },
    },
    Thursday: {
      "09:00 - 10:00": { subject: "Computer Architecture", faculty: "Dr. Taylor", room: "A-105", type: "lecture" },
      "11:00 - 12:00": { subject: "Cloud Computing", faculty: "Prof. Anderson", room: "B-203", type: "lecture" },
      "12:00 - 01:00": { subject: "Break", faculty: "", room: "", type: "lecture" },
      "02:00 - 03:00": { subject: "Database Lab", faculty: "Dr. Thomas", room: "Lab-3", type: "lab" },
    },
    Friday: {
      "09:00 - 10:00": { subject: "Theory of Computation", faculty: "Prof. Jackson", room: "A-106", type: "lecture" },
      "10:00 - 11:00": { subject: "Compiler Design", faculty: "Dr. White", room: "B-204", type: "lecture" },
      "12:00 - 01:00": { subject: "Break", faculty: "", room: "", type: "lecture" },
    },
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Timetable View
            </h1>
            <p className="text-muted-foreground text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Semester 5 - Division A
            </p>
          </div>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Week 12 of 16
          </Badge>
        </div>

        {/* Timetable Grid */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="grid grid-cols-6 gap-4">
              {/* Header Row */}
              <div className="font-semibold text-center p-4 glass-effect rounded-xl">
                Time
              </div>
              {days.map((day, index) => (
                <div
                  key={day}
                  className="font-semibold text-center p-4 glass-effect rounded-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {day}
                </div>
              ))}

              {/* Time Slots */}
              {timeSlots.map((time, timeIndex) => (
                <>
                  <div
                    key={time}
                    className="font-medium text-sm p-4 glass-effect rounded-xl flex items-center justify-center animate-fade-in-up"
                    style={{ animationDelay: `${timeIndex * 0.05}s` }}
                  >
                    {time}
                  </div>
                  {days.map((day, dayIndex) => {
                    const entry = timetableData[day]?.[time];
                    const isBreak = entry?.subject === "Break";

                    return (
                      <Card
                        key={`${day}-${time}`}
                        className={`
                          group cursor-pointer transition-all duration-300 hover:-translate-y-1
                          ${isBreak ? "opacity-50" : "hover:shadow-elegant"}
                          ${entry?.type === "lab" ? "border-accent" : ""}
                          animate-fade-in-up
                        `}
                        style={{ animationDelay: `${(timeIndex * 5 + dayIndex) * 0.02}s` }}
                      >
                        {entry ? (
                          <CardContent className="p-4">
                            {!isBreak ? (
                              <div className="space-y-2">
                                <div className="flex items-start justify-between">
                                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                    {entry.subject}
                                  </h3>
                                  {entry.type === "lab" && (
                                    <Badge variant="secondary" className="ml-2 text-xs">
                                      Lab
                                    </Badge>
                                  )}
                                </div>
                                <div className="space-y-1 text-xs text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span className="truncate">{entry.faculty}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    <span>{entry.room}</span>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="text-center text-sm text-muted-foreground">
                                {entry.subject}
                              </div>
                            )}
                          </CardContent>
                        ) : (
                          <CardContent className="p-4 h-full flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Free</span>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 p-4 glass-effect rounded-xl animate-fade-in-up">
          <span className="text-sm font-medium">Legend:</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-border" />
            <span className="text-sm text-muted-foreground">Lecture</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-accent" />
            <span className="text-sm text-muted-foreground">Lab Session</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Timetable;
