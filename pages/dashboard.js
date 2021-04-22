import useSWR from 'swr'
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/emptyState';
import SiteTableSkeleton from '@/components/siteTableSkeleton';
import DashboardShell from '@/components/dashboardShell';
import fetcher from '@/utils/fetcher';
import SiteTable from '@/components/siteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher)


  if (!data) 
   return (
    <DashboardShell>
      <SiteTableSkeleton />
    </DashboardShell>
  );

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} />: <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
