import { DashboardLayout } from "@/components/DashboardLayout";

const Faculty = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Faculty Management
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Manage faculty members and their assignments
        </p>
        <div className="glass-effect p-8 rounded-2xl text-center">
          <p className="text-muted-foreground">Faculty management interface coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Faculty;
