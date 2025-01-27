import { Meta, StoryObj } from "@storybook/react";
import { Home, Settings, User, Mail, Bell } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

const meta: Meta = {
  title: "Components/Dock",
  component: Dock,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Dock>;

export const Default: Story = {
  render: () => (
    <div className="bg-black/[0.96] p-10 rounded-lg">
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
  ),
};

export const LargeIcons: Story = {
  render: () => (
    <div className="bg-black/[0.96] p-10 rounded-lg">
      <Dock iconSize={50} iconMagnification={80} iconDistance={160}>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Home className="h-8 w-8 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <User className="h-8 w-8 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Mail className="h-8 w-8 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Bell className="h-8 w-8 text-white" />
        </DockIcon>
        <DockIcon className="bg-white/10 hover:bg-white/20">
          <Settings className="h-8 w-8 text-white" />
        </DockIcon>
      </Dock>
    </div>
  ),
};

export const TopAligned: Story = {
  render: () => (
    <div className="bg-black/[0.96] p-10 rounded-lg">
      <Dock direction="top">
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
  ),
};
