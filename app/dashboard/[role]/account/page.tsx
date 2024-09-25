import { createClient } from "@/utils/server";
import getUserNames from "@/lib/getUserNames";
import Image from "next/image";

export default async function MyAccount() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const result = await getUserNames();

  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-3xl text-csrcyellow">My Account</h1>

      <div className="flex flex-col gap-5 py-4">
        <div className="flex items-start gap-2">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/comics-src-profile-image.png"
              width={50}
              height={50}
              alt="Fan Profile Image"
            />
            <button className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150">
              Update Photo
            </button>
          </div>
          <p className="max-w-40 text-balance text-[10px] text-csrclight/50">
            <span className="text-csrclight/75">Minimum dimensions: </span>50x50
            pixels
            <br />
            <span className="text-csrclight/75">Maximum file size: </span>1 MB
            <br />
            <span className="text-csrclight/75">File format: </span>JPEG, PNG,
            WEBP
          </p>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />
        <div className="flex gap-3 text-csrcblue">
          Username:
          <span className="text-csrclight">{result?.username}</span>
        </div>
        <div className="flex gap-3 text-csrcblue">
          Email:
          <span className="text-csrclight">{data.user?.email}</span>
        </div>
        <div className="flex gap-3 text-csrcblue">
          Password:
          <button className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150">
            <span>Reset Password</span>
          </button>
        </div>
        <div className="flex gap-3 text-csrcblue">
          URL:
          <input className="bg-csrcdark text-csrclight caret-csrcyellow focus:outline-none">
            {}
          </input>
        </div>
        <div className="flex gap-3 text-csrcblue">
          Social Media:
          <input className="bg-csrcdark text-csrclight caret-csrcyellow focus:outline-none">
            {}
          </input>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />

        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150">
            <span>Cancel</span>
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded bg-csrcyellow px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:bg-green-500 hover:text-csrclight hover:shadow-md hover:delay-150">
            <span>Save</span>
          </button>
        </div>
      </div>
    </main>
  );
}

/* 
<div>
  <label for="input1" class="text-sm text-gray-700 block mb-1 font-medium">
    Name
  </label>
  <input type="text" name="input1" id="input1" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700" placeholder="Enter your name">
</div>
*/
