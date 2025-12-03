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
    <div className="bg-mock_offset fixed inset-0 z-40">
      <form className="bg-csrcblue fixed top-1/2 left-1/2 z-50 w-80 -translate-x-1/2 -translate-y-1/2 rounded-md p-4 drop-shadow-lg">
        <div className="flex">
          <h1 className="text-csrcdark flex-1 text-center text-2xl font-bold">
            Sign-Up
          </h1>
          <button
            onClick={handleCloseModal}
            className="bg-close_modal flex-0 cursor-pointer bg-no-repeat p-2 transition delay-150 hover:scale-[.9]"
          ></button>
        </div>
        <div className="divide-csrclight/20 divide-y">
          <div className="flex items-center gap-2 py-2">
            <div className="w-1/4">
              <Image
                src="/assets/images/comics-src-fan.svg"
                alt="Fan"
                width={80}
                height={84}
              ></Image>
            </div>
            <article className="w-3/4">
              <h3 className="text-csrcdark font-bold">As a Fan</h3>
              <p className="text-csrclight py-2 text-xs">
                Follow your favorite artists, keep a wishlist, get instant
                access to your purchases, showcase your collection, and explore
                the comics of like-minded fans.
              </p>
              <Link href="/sign-up/fan">
                <ModalButton onClick={handleCloseModal}>
                  Become a Fan
                </ModalButton>
              </Link>
            </article>
          </div>
          <div className="flex items-center gap-2 py-2">
            <div className="w-1/4">
              <Image
                src="/assets/images/comics-src-author.svg"
                alt="Author"
                width={76}
                height={103}
              ></Image>
            </div>
            <article className="w-3/4">
              <h3 className="text-csrcdark font-bold">As an Author</h3>
              <p className="text-csrclight py-2 text-xs">
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
          <div className="flex items-center gap-2 py-2">
            <div className="w-1/4">
              <Image
                src="/assets/images/comics-src-publisher.svg"
                alt="Publisher"
                width={50}
                height={92}
              ></Image>
            </div>
            <article className="w-3/4">
              <h3 className="text-csrcdark font-bold">As a Publisher</h3>
              <p className="text-csrclight py-2 text-xs">
                Unified accounting and stats across all your artists, a single
                fulfillment interface for all your merch, direct payments on a
                per-release basis, and a whole lot more.
              </p>
              <ModalButton onClick={handleCloseModal}>
                <Link href="/sign-up/publisher">Reach New Customers</Link>
              </ModalButton>
            </article>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalForSignIn;
