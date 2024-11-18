import { Button } from '../../../components/ui/button';
//import { auth } from '@/auth';
import PageContainer from '../../../ui/layout/page-container';

export default async function page() {
  //const session = await auth();
  //if (!session || !session.user) return null;
  const content = [];

  for (let i = 0; i < 100; i++) {
    content.push(
      <div key={i}>test linetest linetest linetest linetest linetest line</div>
    );
  }

  return (
    <PageContainer scrollable>
      {content}
      <Button>test dashboard</Button>;
    </PageContainer>
  );
}
