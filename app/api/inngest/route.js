import { serve } from 'inngest/next';
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from '@/config/inngest';

export const GET = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});

export const POST = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
