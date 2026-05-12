import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { ReduxProvider } from "@/src/store/storeProvider";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  return (
    <NextIntlClientProvider locale={locale}>
      <ReduxProvider>
        <Header />
        {children}
        <Footer />
      </ReduxProvider>
    </NextIntlClientProvider>
  );
}