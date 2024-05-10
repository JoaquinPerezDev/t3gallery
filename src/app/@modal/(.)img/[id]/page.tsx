import { Modal } from "./modal";
import FullPageImageView from "~/app/common/full-page-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
