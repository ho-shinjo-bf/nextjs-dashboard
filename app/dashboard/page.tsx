import { useEffect, useState } from 'react';

export default function Page() {
  const [googleHtml, setGoogleHtml] = useState<string | null>(null);

  useEffect(() => {
    const getGoogleHtml = async () => {
      const googleHtml = await fetch('https://www.google.com');
      setGoogleHtml(await googleHtml.text());
    };
    getGoogleHtml();
  }, []);

  return <p>{googleHtml}</p>;
}
