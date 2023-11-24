"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/database";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      /* view="magic_link" */
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            //override styles
            colors: {
              brand: "#00a4de",
              brandAccent: "#003041",
              brandButtonText: "#f2fcff",
              defaultButtonBackgroundHover: "#def6ff",
              defaultButtonBorder: "#667378",
              defaultButtonText: "#edeff0",
              dividerBackground: "#edeff0",
              inputBackground: "transparent",
              inputBorder: "#00a4de",
              inputBorderHover: "#667378",
              inputBorderFocus: "#003041",
              inputText: "#003041",
              inputLabelText: "#00a4de",
              inputPlaceholder: "#667378",
              messageText: "#edeff0",
              messageTextDanger: "#f53b57", // red
              anchorTextColor: "#edeff0",
              anchorTextHoverColor: "#003041",
            },
            fonts: {
              bodyFontFamily: `__Assistant_bf4261, sans-serif`,
              buttonFontFamily: `__Assistant_bf4261, sans-serif`,
              inputFontFamily: `__Assistant_bf4261, sans-serif`,
              labelFontFamily: `__Assistant_bf4261, sans-serif`,
            },
          },
        },
      }}
      theme="default"
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}