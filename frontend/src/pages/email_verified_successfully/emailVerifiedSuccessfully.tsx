// react
import { useNavigate } from "react-router-dom";

// lucide
import { ArrowRight, CheckCircle } from "lucide-react";

// motion
import { motion } from "motion/react";

// shadcn
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function EmailVerifiedSuccesfullyPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed h-screen w-screen flex justify-center items-center bg-white/30 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Card className="rounded-none md:rounded-4xl w-screen h-screen md:w-xl md:h-auto flex flex-col gap-8 bg-white pt-30 px-5 md:py-10 md:px-10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-12 h-24 md:h-22 text-green-600" />
          </div>
          <h1 className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-5xl text-center font-normal leading-tight">
            Email Confirmed
          </h1>
          <p className="px-10 md:px-0 text-center text-md md:text-xl text-gray-500 leading-relaxed">
            Your new email address has been successfully confirmed. You can now
            use it to log in to your account and receive all notifications.
          </p>
          <div className="w-full p-5 rounded-xl bg-green-50 border-1 border-green-300 text-green-700 flex flex-col justify-center items-center gap-3">
            <p className="flex items-center gap-3">
              <CheckCircle className="size-6" /> Email verification completed
            </p>
            <p>
              Your account is now fully updated with your new email address. All
              future communications will be sent to this new address.
            </p>
          </div>
          <Button
            className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white items-center hover:text-white"
            variant="outline"
            onClick={() => navigate("/user/profile")}
          >
            Go to Profile <ArrowRight className="size-4" />
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}

export default EmailVerifiedSuccesfullyPage;
