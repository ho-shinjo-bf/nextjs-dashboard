'use client';

import { useState } from 'react';

export function InvoiceClientComponent() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <p>Invoices Page! {clicked && 'clicked!!!'}</p>
      <button onClick={() => setClicked(true)}>Click me</button>
    </>
  );
}
