import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChartBar,
  Clipboard,
  ListChecks,
  QuestionMark,
  Student,
} from "@phosphor-icons/react/dist/ssr";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { OverviewChart } from "@/components/custom/dashboard/charts/overview";
import { EditProfileDialog } from "@/components/custom/dashboard/profile/edit-dialog";

const StatOverviewGrid = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatOverviewCard
        icon={<Student className="h-4 w-4 text-muted-foreground" size={24} />}
        title="Total Murid"
        description="dari total 696"
        value={69}
      />
      <StatOverviewCard
        icon={<Student className="h-4 w-4 text-muted-foreground" size={24} />}
        title="Total Murid"
        description="dari total 696"
        value={69}
      />
      <StatOverviewCard
        icon={<Student className="h-4 w-4 text-muted-foreground" size={24} />}
        title="Total Murid"
        description="dari total 696"
        value={69}
      />
      <StatOverviewCard
        icon={<Student className="h-4 w-4 text-muted-foreground" size={24} />}
        title="Total Murid"
        description="dari total 696"
        value={69}
      />
    </div>
  );
};

interface IStatOverviewCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: any;
}
const StatOverviewCard = ({
  icon,
  title,
  value,
  description,
}: IStatOverviewCard) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ProfileCard = () => {
  return (
    <div className="flex flex-row gap-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://github.com/thiotimoo.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <span className="text-xl font-semibold">Hai, Timothy!</span>
          <span className="text-lg">5 October 2024</span>
        </div>
        <EditProfileDialog />
      </div>
    </div>
  );
};

const TasksOverviewGrid = ({ children }: any) => {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row space-x-2 items-center">
        <ListChecks
          className="w-10 h-10 p-2 bg-white border border-border rounded-full"
          size={24}
          weight="bold"
        />
        <div className="flex flex-col space-y-1.5">
          <CardTitle>Tugas yang belum terselesaikan</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">{children}</CardContent>
    </Card>
  );
};

const TasksOverviewItem = () => {
  return (
    <Card className="rounded-2x shadow-none">
      <CardHeader className="flex flex-row space-x-2 items-center p-3">
        <Clipboard
          className="w-10 h-10 p-2 bg-blue-900 text-slate-200 border border-border rounded-full"
          size={24}
          weight="bold"
        />
        <div className="flex flex-col space-y-1.5">
          <CardTitle>PAS Informatika</CardTitle>
          <CardDescription>Due 24 December 2024</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

const DashboardPage = () => {
  return (
    <div className="flex flex-col w-full h-full md:ms-64 max-md:pb-32 p-8 gap-4 min-h-svh ">
      <ProfileCard />
      <StatOverviewGrid />
      <div className="grid md:grid-cols-2 gap-4">
        <TasksOverviewGrid>
          <TasksOverviewItem />
          <TasksOverviewItem />
          <TasksOverviewItem />
          <TasksOverviewItem />
        </TasksOverviewGrid>
        <OverviewChart />
      </div>
    </div>
  );
};

export default DashboardPage;
