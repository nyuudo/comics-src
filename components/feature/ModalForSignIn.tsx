"use client";
import Image from "next/image";
import Link from "next/link";

import { useDispatch } from "react-redux";

import { closeModal } from "@/store/modalSlice";

import { ModalForSignInProps } from "@/types/comics-src-types";

import ModalButton from "./ModalButton";

const ModalForSignIn = (onClose: ModalForSignInProps) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="fixed inset-0 z-40 bg-mock_offset_01">
      <form className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-csrcblue rounded-md p-4 drop-shadow-lg">
        <div className="flex">
          <h1 className="text-csrcdark text-2xl font-bold text-center flex-1">
            Sign-Up
          </h1>
          <button
            onClick={handleCloseModal}
            className="bg-close_modal bg-no-repeat p-2 transition delay-150 hover:scale-[.9] flex-0 "
          ></button>
        </div>
        <div className="divide-y divide-csrclight/20">
          <div className="flex items-center py-2 gap-2">
            <div className="w-1/4">
              <Image
                src="/assets/images/comics-src-fan.svg"
                alt="Fan"
                width={80}
                height={84}
              ></Image>
            </div>
            <article className="w-3/4">
              <h3 className="text-csrcdark font-semibold">As a Fan</h3>
              <p className="text-csrclight text-xs py-2">
                Follow your favorite artists, keep a wishlist, get instant
                streaming of your purchases, showcase your collection, and
                explore the music of like-minded fans.
              </p>
              <Link href="/sign-up/fan">
                <ModalButton onClick={handleCloseModal}>
                  Become a Fan
                </ModalButton>
              </Link>
            </article>
          </div>
          <div className="flex items-center py-2 gap-2">
            <div className="w-1/4">
              <Image
                src="/assets/images/comics-src-author.svg"
                alt="Author"
                width={76}
                height={103}
              ></Image>
            </div>
            <article className="w-3/4">
              <h3 className="text-csrcdark font-semibold">As an Author</h3>
              <p className="text-csrclight text-xs py-2">
                Sell directly to your fans with total control over your art and
                pricing. Easy access to real-time stats, comics chart reporting,
                and more.
              </p>
              <Link href="/sign-up/author">
                <ModalButton onClick={handleCloseModal}>
                  Grow Your Audience
                </ModalButton>
              </Link>
            </article>
          </div>
          <div className="flex items-center py-2 gap-2">
            <div className="w-1/4">
              <Image
                src="/assets/images/comics-src-publisher.svg"
                alt="Publisher"
                width={50}
                height={92}
              ></Image>
            </div>
            <article className="w-3/4">
              <h3 className="text-csrcdark font-semibold">As a Publisher</h3>
              <p className="text-csrclight text-xs py-2">
                Unified accounting and stats across all your artists, a single
                fulfillment interface for all your merch, direct payments on a
                per-release basis, and a whole lot more.
              </p>
              <ModalButton onClick={handleCloseModal}>
                <Link href="/sign-up/publisher">Expand Your Business</Link>
              </ModalButton>
            </article>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalForSignIn;
