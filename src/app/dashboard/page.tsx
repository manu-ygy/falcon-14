import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
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
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart";
import { OverviewChart } from "@/src/components/custom/dashboard/charts/overview";
import { EditProfileDialog } from "@/src/components/custom/dashboard/profile/edit-dialog";
import { Video } from "@/src/components/ui/video";

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
    <Card className="rounded-3xl">
      <CardHeader className="flex flex-row space-x-4 items-center border-b">
        <ListChecks
          className="w-10 h-10 p-2 bg-indigo-500 text-slate-100 rounded-full"
          size={24}
          weight="bold"
        />
        <div className="flex flex-col space-y-1.5">
          <CardTitle>Tugas yang belum terselesaikan</CardTitle>
          <CardDescription>Jangan dibiarkan menumpuk, ya!</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4">{children}</CardContent>
    </Card>
  );
};

const TasksOverviewItem = () => {
  return (
    <Card className="rounded-2x shadow-none">
      <CardHeader className="flex flex-row space-x-4 items-center">
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

const DashboardHero = () => {
  return (
    <div className = "w-full p-16 bg-primary-gradient rounded-3xl text-slate-100">
      <h1 className = "text-3xl font-semibold">Selamat datang</h1>
      <span>Di SMA Yos Sudarso Karawang!</span>
    </div>
  )
}

const DashboardFeeds = () => {
  return (
    <Card className="rounded-3xl">
      <CardHeader className="flex flex-row space-x-4 items-center border-b">
        <ListChecks
          className="w-10 h-10 p-2 bg-indigo-500 text-slate-100 rounded-full"
          size={24}
          weight="bold"
        />
        <div className="flex flex-col space-y-1.5">
          <CardTitle>Yang baru dari kami</CardTitle>
          <CardDescription>Cek konten keren dari kami!</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4 flex gap-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PM6-RdLRAN0?si=9l_OOvgZw4EINjj2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className = "rounded-2xl"></iframe>
      </CardContent>
    </Card>
  )
}

const DashboardPage = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <DashboardFeeds></DashboardFeeds>
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
