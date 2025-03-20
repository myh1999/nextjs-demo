"use client";

// e.g. https://nextuioss.featurebase.app/roadmap

import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@heroui/modal";
import { Spacer } from "@heroui/react";
import { signIn } from "next-auth/react";

import { GithubIcon, GoogleIcon } from "@/components/icons";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOnPress = async (provider: string) => {
    await signIn(provider);
  };

  return (
    <>
      <Button
        className="bg-white text-black border text-xs px-3 py-1"
        radius="full"
        onPress={onOpen}
      >
        Sign in / Sign up
      </Button>

      <Modal
        hideCloseButton
        isOpen={isOpen}
        size="sm"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalBody>
              <div className="py-2 px-2 pt-4">
                <b>Sign up to continue</b>
                <Spacer y={3} />
                <div>
                  <Button
                    className="h-8 rounded-md w-full text-gray-100 false false font-semibold"
                    color="primary"
                    startContent={
                      <GoogleIcon className="absolute left-0 ml-3" />
                    }
                  >
                    Continue with Google
                  </Button>
                </div>
                <Spacer y={3} />
                <div>
                  <Button
                    className="h-8 rounded-md w-full text-gray-100 false false font-semibold bg-gray-700 hover:bg-gray-700/[85%]"
                    startContent={
                      <GithubIcon className="absolute left-0 ml-3" />
                    }
                    onPress={() => handleOnPress("github")}
                  >
                    Continue with Github
                  </Button>
                </div>
                <Spacer y={4} />
                <p className="text-xs text-center">Or continue with email</p>
                <Spacer y={4} />
                <Button className="h-8 rounded-md w-full text-gray-900 false false font-normal bg-white border hover:bg-gray-100">
                  Sign with Email
                </Button>
                <Spacer y={3} />
                <Button className="h-8 rounded-md w-full text-gray-900 false false font-normal bg-white border hover:bg-gray-100">
                  Register with Email
                </Button>
                <Spacer y={4} />
              </div>
            </ModalBody>
            <ModalFooter className="bg-gray-50 py-4 text-xs text-gray-500 text-center">
              <div>
                We use Featurebase to collect feedback from users like you. Sign
                up to post and vote.
              </div>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
