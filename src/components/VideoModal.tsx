import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title = "Watch Video" }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
      <DialogContent 
        className="max-w-4xl w-full p-0 overflow-hidden bg-black border-none"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
            aria-label="Close video"
          >
            <X size={24} />
          </button>

          {/* Video Player */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full"
              controls
              autoPlay
              src={videoUrl}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
