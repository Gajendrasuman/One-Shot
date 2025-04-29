
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/temp.png"
        alt="temp"
        width={1920}
        height={1080}
        priority
        className="size-full"
      />
    </main>
  );
}
