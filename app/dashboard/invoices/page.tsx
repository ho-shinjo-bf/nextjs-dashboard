'use client';

import dynamic from 'next/dynamic';

const InvoiceClientComponent = dynamic(
  () =>
    import('../InvoiceClientComponent').then(
      (mod) => mod.InvoiceClientComponent,
    ),
  { ssr: true },
);

export default function Page() {
  return <InvoiceClientComponent />;
}
