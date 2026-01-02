import { redirect } from 'next/navigation';
import { AppConfig } from '@/libs/utils/AppConfig';

export default function RootPage() {
  redirect(`/${AppConfig.defaultLocale}`);
}
