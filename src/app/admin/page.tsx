import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Student } from '@phosphor-icons/react/dist/ssr';

interface IStatOverviewCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: any;
} 

const StatOverviewGrid = () => {
  return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatOverviewCard
              icon={<Student className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" size={32} />}
              title="Total user"
              description="+4 dari minggu kemarin."
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

const StatOverviewCard = ({
  icon,
  title,
  value,
  description,
}: IStatOverviewCard) => {
  return (
      <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="font-medium">{title}</CardTitle>
              <div className='w-4 h-4 -translate-x-[2px] relative'>
                {icon}
              </div>
          </CardHeader>
          <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <p className="text-sm text-muted-foreground mt-2">{description}</p>
          </CardContent>
      </Card>
  );
};
export default function AdminLanding() {
  return (
    <StatOverviewGrid/>
  )
}