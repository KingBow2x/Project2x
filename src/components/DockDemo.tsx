import { Home, Settings, User, Mail, Bell } from "lucide-react";
import { Dock, DockIcon } from "./ui/dock";

export interface DockDemoProps {
  className?: string;
}

export default function DockDemo({ className }: DockDemoProps) {
  return (
    <div className={className}>
      <Dock>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Home className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <User className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Mail className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Bell className="h-6 w-6 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Settings className="h-6 w-6 text-white" />
        </DockIcon>
      </Dock>
    </div>
  );
}
