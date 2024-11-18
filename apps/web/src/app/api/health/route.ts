//import { redirect } from 'next/navigation';
import { logger } from '../../../lib/logger';
export async function GET() {
  //redirect('/about');
  logger.info('test info');

  return Response.json({ health: true });
}
