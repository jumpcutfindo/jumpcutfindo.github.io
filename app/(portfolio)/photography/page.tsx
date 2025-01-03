"use client";

import { useState } from "react";

import Image from "next/image";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";

import type Photo from "../types/photo";
import photosJson from "./api/photos.json";

interface PhotoModalProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  photo: Photo | undefined;
}

function PhotoModal(props: PhotoModalProps) {
  const { photo, isOpen, setIsOpen } = props;

  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClick={onClick}
      onClose={() => {}}
      className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-black/60"
    >
      <Dialog.Panel className="max-w-screen-xl" onClick={onClick}>
        {photo && (
          <Image
            src={photo.image}
            width="0"
            height="0"
            className="w-full max-h-screen"
            alt={photo.description}
          />
        )}
      </Dialog.Panel>
    </Dialog>
  );
}

interface PhotoProps {
  index: number;
  photo: Photo;
  onOpen: (photo: Photo) => void;
}

function PhotoItem(props: PhotoProps) {
  const { index, photo, onOpen } = props;

  return (
    <div
      key={index}
      className="flex flex-col space-y-2 w-full break-inside-avoid-column hover:cursor-pointer group"
      onClick={() => onOpen(photo)}
    >
      <Image
        src={photo.image}
        className="w-full bg-black/10"
        width={photo.width}
        height={photo.height}
        alt={photo.description}
      />
      <p className="text-xs italic text-gray-400 group-hover:text-white transition">
        {photo.location}, {photo.country} ({photo.year})
      </p>
    </div>
  );
}

export default function Photography() {
  const photos = photosJson as Photo[];

  const [currentPhoto, setCurrentPhoto] = useState<Photo | undefined>(
    undefined,
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const originalLoadedState: { [key: string]: boolean } = {};
  for (const photo of photos) originalLoadedState[photo.image] = false;

  const onOpenPhoto = (photo: Photo) => {
    setCurrentPhoto(photo);
    setModalOpen(true);
  };

  return (
    <main className="flex lg:py-24 md:py-12 py-6 w-screen">
      <div className="flex flex-col flex-grow">
        <div className="flex md:mx-12 mx-6 mb-4">
          <a
            className="text-sm font-semibold hover:cursor-pointer group"
            href="/"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="mx-2 group-hover:-translate-x-1/2 group-hover:text-blue-400"
            />

            <span className="group-hover:text-blue-400">Daniel Hoe</span>
          </a>
        </div>

        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-5xl font-semibold text-blue-500 md:mx-12 mx-6">
              Photography
            </h1>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 md:mx-12 mx-6 gap-8 md:space-y-8 space-y-4">
            {photos.map((photo, index) => {
              return (
                <PhotoItem
                  key={index}
                  index={index}
                  photo={photo}
                  onOpen={onOpenPhoto}
                />
              );
            })}
          </div>
          <PhotoModal
            isOpen={isModalOpen}
            setIsOpen={setModalOpen}
            photo={currentPhoto}
          />
        </div>
      </div>
    </main>
  );
}
