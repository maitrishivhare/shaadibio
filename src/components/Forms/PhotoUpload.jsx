import { useState, useRef } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function PhotoUpload({ data, onChange }) {
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [showCrop, setShowCrop] = useState(false);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImgSrc(reader.result);
      setShowCrop(true);
    };
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const crop = centerCrop(
      makeAspectCrop({ unit: "%", width: 80 }, 3 / 4, width, height),
      width, height
    );
    setCrop(crop);
  };

  const handleCropDone = () => {
    if (!completedCrop || !imgRef.current || !canvasRef.current) return;
    const image = imgRef.current;
    const canvas = canvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = 300;
    canvas.height = 400;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0, 0, 300, 400
    );

    const base64 = canvas.toDataURL("image/jpeg", 0.9);
    onChange({ photo: base64 });
    setShowCrop(false);
  };

  const handleRemove = () => {
    setImgSrc("");
    setShowCrop(false);
    setCompletedCrop(null);
    onChange({ photo: null });
  };

  return (
    <div className="form-section">
      <h2 className="form-section__title">Profile Photo</h2>
      <p className="form-section__subtitle">Upload and crop your photo (3:4 ratio recommended)</p>

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {!showCrop && !data.photo && (
        <div className="photo-upload-box">
          <div className="photo-upload-icon">📷</div>
          <p>Click to upload photo</p>
          <p style={{ fontSize: "12px", color: "#999" }}>JPG, PNG supported</p>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{
              position: "absolute", inset: 0,
              opacity: 0, cursor: "pointer", width: "100%", height: "100%"
            }}
          />
        </div>
      )}

      {showCrop && imgSrc && (
        <div className="photo-crop-area">
          <p style={{ marginBottom: "12px", fontWeight: 600, color: "#1A1A2E" }}>
            Drag to crop your photo
          </p>
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={3 / 4}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              onLoad={onImageLoad}
              style={{ maxHeight: "400px", maxWidth: "100%" }}
              alt="crop"
            />
          </ReactCrop>
          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <button
              className="db-btn-next"
              onClick={handleCropDone}
            >
              ✓ Apply Crop
            </button>
            <button
              className="db-btn-back"
              onClick={() => setShowCrop(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!showCrop && data.photo && (
        <div className="photo-preview-box">
          <img src={data.photo} alt="Profile" className="photo-preview-img" />
          <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
            <button className="db-btn-next" onClick={() => setShowCrop(true)}>
              ✂ Re-crop
            </button>
            <button className="db-btn-back" onClick={handleRemove}>
              🗑 Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}