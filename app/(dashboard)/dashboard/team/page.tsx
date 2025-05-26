import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Loader2, UserPlus, UserMinus } from 'lucide-react';
import { useActionState } from 'react';
import { removeTeamMember, inviteTeamMember } from '@/app/(login)/actions';
import { TeamDataWithMembers, User } from '@/lib/db/schema';
import useSWR from 'swr';
import { Suspense } from 'react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type ActionState = {
  error?: string;
  success?: string;
};

function TeamMembersList() {
  const { data: teamData } = useSWR<TeamDataWithMembers>('/api/team', fetcher);
  const [removeState, removeAction, isRemovePending] = useActionState<ActionState, FormData>(
    removeTeamMember,
    {}
  );

  if (!teamData?.teamMembers?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No team members yet.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {teamData.teamMembers.map((member) => (
        <li key={member.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback>
                {member.user.name?.[0] || member.user.email[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{member.user.name || member.user.email}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
          {member.role !== 'owner' && (
            <form action={removeAction}>
              <input type="hidden" name="memberId" value={member.id} />
              <Button 
                variant="outline" 
                size="sm"
                disabled={isRemovePending}
              >
                {isRemovePending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Removing...
                  </>
                ) : (
                  <>
                    <UserMinus className="mr-2 h-4 w-4" />
                    Remove
                  </>
                )}
              </Button>
            </form>
          )}
        </li>
      ))}
      {removeState?.error && (
        <p className="text-red-500 mt-2">{removeState.error}</p>
      )}
    </ul>
  );
}

function InviteForm() {
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const [inviteState, inviteAction, isInvitePending] = useActionState<ActionState, FormData>(
    inviteTeamMember,
    {}
  );

  return (
    <form action={inviteAction} className="space-y-4">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="colleague@example.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="role">Role</Label>
        <select
          id="role"
          name="role"
          className="w-full rounded-md border border-gray-300 p-2"
          required
        >
          <option value="member">Member</option>
          {user?.role === 'owner' && <option value="owner">Owner</option>}
        </select>
      </div>
      {inviteState?.error && (
        <p className="text-red-500">{inviteState.error}</p>
      )}
      {inviteState?.success && (
        <p className="text-green-500">{inviteState.success}</p>
      )}
      <Button
        type="submit"
        className="w-full"
        disabled={isInvitePending}
      >
        {isInvitePending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Invitation...
          </>
        ) : (
          <>
            <UserPlus className="mr-2 h-4 w-4" />
            Send Invitation
          </>
        )}
      </Button>
    </form>
  );
}

export default function TeamPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-semibold">Team Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <TeamMembersList />
          </Suspense>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invite New Member</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <InviteForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}