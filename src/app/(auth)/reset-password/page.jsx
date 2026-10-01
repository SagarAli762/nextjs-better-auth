import React, { Suspense } from "react";
import ResetPasswordForm from "./reset-password-form";

const ResetPasswordPage = () => {
  return (
    <div>
      Reset Password
      <Suspense fallback="loading...">
        <ResetPasswordForm></ResetPasswordForm>
      </Suspense>
    </div>
  );
};

export default ResetPasswordPage;
