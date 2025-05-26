import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2 } from 'lucide-react';
import { customerPortalAction } from '@/lib/payments/actions';
import { TeamDataWithMembers } from '@/lib/db/schema';
import useSWR from 'swr';
import { Suspense } from 'react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SubscriptionDetails() {
  const { data: teamData } = useSWR<TeamDataWithMembers>('/api/team', fetcher);

  if (!teamData) {
    return <div>Loading...</div>;
  }

  const isSubscribed = teamData.subscriptionStatus === 'active' || 
                      teamData.subscriptionStatus === 'trialing';

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Current Plan</h3>
          <p className="text-sm text-gray-500">
            {teamData.planName || 'Free'}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">
            Status: <span className="capitalize">{teamData.subscriptionStatus || 'No subscription'}</span>
          </p>
        </div>
      </div>

      <form action={customerPortalAction}>
        <Button type="submit" variant="outline" className="w-full">
          <CreditCard className="mr-2 h-4 w-4" />
          Manage Subscription
        </Button>
      </form>
    </div>
  );
}

function PaymentHistory() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        View your payment history in the Stripe Customer Portal
      </p>
      <form action={customerPortalAction}>
        <Button type="submit" variant="outline" className="w-full">
          View Payment History
        </Button>
      </form>
    </div>
  );
}

export default function BillingPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-semibold">Billing & Subscription</h1>

      <Card>
        <CardHeader>
          <CardTitle>Subscription Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <SubscriptionDetails />
          </Suspense>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <PaymentHistory />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}