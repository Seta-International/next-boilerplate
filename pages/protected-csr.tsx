import AuthGuard from 'components/AuthGuard';
import TestLink from 'components/TestLink';

function Page() {
  return (
    <div>
      <TestLink />
      ProtectedPage
    </div>
  );
}

function ProtectedPage() {
  return (
    <AuthGuard>
      <Page />
    </AuthGuard>
  );
}

export default ProtectedPage;
