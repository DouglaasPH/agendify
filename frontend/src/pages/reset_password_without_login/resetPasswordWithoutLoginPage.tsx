// motion
import { motion } from "motion/react";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ResetPasswordWithoutLoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-full h-screen flex flex-col justify-center items-center p-5 py-5 sm:py-5 md:py-30"
    >
      <Card className="w-full max-w-screen-sm flex flex-col justify-between items-center">
        <CardHeader className="w-full">
          <div className="w-full flex flex-col items-center text-center gap-2">
            <h1 className="text-3xl font-normal w-full">Reset password</h1>
            <p className="text-muted-foreground text-sm font-normal leading-relaxed">
              Enter your email to receive password reset instructions.
            </p>
          </div>
        </CardHeader>
        <CardContent className="w-full">
          <div className="flex flex-col gap-10">
            <form className="flex flex-col justify-start gap-5">
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="text">New password</Label>
                <Input
                  id="newPassword"
                  type="text"
                  placeholder="Enter your new password"
                  required
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="email">Confirm new password</Label>
                <Input
                  id="confirmPassword"
                  type="text"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </form>
            <Button variant="default" className="w-full">
              Send Instructions
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <div className=" text-center text-sm leading-relaxed">
            Remember your password?{" "}
            <a
              href="/login"
              className="hover:underline hover:underline-offset-4 font-medium text-blue-600"
            >
              Back to Login
            </a>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ResetPasswordWithoutLoginPage;
