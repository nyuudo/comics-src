import ModalButton from "./ModalButton";

type ModalForSignInProps = {
  onClose: () => void;
};

const ModalForSignIn = (onClose: ModalForSignInProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <form className="bg-csrcdark rounded;">
        <h1 className="text-white">
          Sign up for a COMICS/src Account (Author, Fan or Publisher)
        </h1>
        <h3 className="text-white">Sign up as a Fan</h3>
        <p className="text-white">
          Follow your favorite artists, keep a wishlist, get instant streaming
          of your purchases, showcase your collection, and explore the music of
          like-minded fans.
        </p>
        <ModalButton />
        <h3 className="text-white">Sign up as an Author</h3>
        <p className="text-white">
          Sell directly to your fans with total control over your art and
          pricing. Easy access to real-time stats, comics chart reporting, and
          more.
        </p>
        <ModalButton />
        <h3 className="text-white">Sign up as Publisher</h3>
        <p className="text-white">
          Unified accounting and stats across all your artists, a single
          fulfillment interface for all your merch, direct payments on a
          per-release basis, and a whole lot more.
        </p>
        <ModalButton />
      </form>
    </div>
  );
};

export default ModalForSignIn;
