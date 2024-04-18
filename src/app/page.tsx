import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/e7ccd3f5-c78e-4682-b916-41a863503892-yxf89x.svg",
  "https://utfs.io/f/2a7577e2-58fc-4806-ab55-808c2297a324-nl792c.png",
  "https://utfs.io/f/36eec4d8-450e-494f-959d-6ed73080fed3-5hbebz.png",
  "https://utfs.io/f/13800a7a-9868-4cd7-8b12-dad95d3c455d-13g58x.jpg",
  "https://utfs.io/f/cd61a7ef-f012-4bf6-b6b7-49885f4316f7-40079a._V1_FMjpg_UX1000_.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
