import FullPageImageView from "~/app/common/full-page-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="m-h-0 flex h-full w-full min-w-0 overflow-y-hidden">
      <FullPageImageView photoId={photoId} />;
    </div>
  );
}
