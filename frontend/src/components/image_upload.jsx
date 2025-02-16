import { Dropdown, Image } from "antd";
import React, { useRef, useState } from "react";

const ImageUploader = ({
  selectedImages,
  setSelectedImages,
  children,
  multiple,
}) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleImageSelect = (event) => {
    const files = event.target.files;
    if (files.length === 0) {
      return; // 如果是取消选择文件，则不做任何处理
    }
    if (multiple) {
      const imagesArray = Array.from(files);
      setSelectedImages([...selectedImages, ...imagesArray]);
    } else {
      setSelectedImages([files[0]]);
    }
  };
  const items = [
    {
      label: (
        <div className="flex items-center gap-2 min-h-52 min-w-[400px]">
          {selectedImages &&
            selectedImages.map(
              (image) =>
                image && (
                  <Image
                    key={image.name}
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                    height={200}
                    width={300}
                  />
                )
            )}
        </div>
      ),
    },
  ];
  return (
    <div style={{ width: "100%" }}>
      <input
        type="file"
        onChange={handleImageSelect}
        accept="image/*"
        multiple={multiple}
        style={{ display: "none" }}
        ref={inputRef}
      />
      <Dropdown
        menu={{ style: { overflow: "auto", maxWidth: 600 }, items: items }}
        placement="top"
      >
        <span onClick={handleClick}>{children}</span>
      </Dropdown>
    </div>
  );
};

export default ImageUploader;
