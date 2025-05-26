import { getActivityLogs } from '@/lib/db/queries';

export async function GET() {
  const logs = await getActivityLogs();
  return Response.json(logs);
}