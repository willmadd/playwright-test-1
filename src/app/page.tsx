import Image from "next/image";
import DataWidget from "./_components/DataWidget";

export default function Home() {
  const fetchFakeData = async (rnd: number): Promise<string> => {
    "use server";

    const ms = 3000;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`number is ${parseFloat(rnd.toFixed(3)) * 10}`);
      }, ms);
    });
  };
  // DataWidget
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-xl text-center font-bold">Test number Fetcher</h1>
        <DataWidget action={fetchFakeData} />
      </div>
    </main>
  );
}
