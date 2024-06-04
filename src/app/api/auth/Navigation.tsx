'use client';

import { Header } from '@/app/components/layout/header/header';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();
  const router = useRouter();
  if (session === null && pathname?.includes('/dashboard')) {
    router.push('/auth/login');
  }
  return <Header />;
};
export default Navigation;
