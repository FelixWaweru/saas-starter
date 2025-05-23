import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase/client';

export function AuthForm() {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Dispersal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your AI Agent Team Awaits
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['github', 'google']}
            redirectTo={`${window.location.origin}/auth/callback`}
            theme="light"
            socialLayout="horizontal"
            view="sign_in"
          />
        </div>
      </div>
    </div>
  );
}