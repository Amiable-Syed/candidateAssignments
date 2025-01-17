import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import RegisterClientForm from "./forms";
import { FormikContainer } from "../components/FormikContainer";
import { DEFAULT_VALUES } from "../constants/registerClientConstants";
import { REGISTER_CLIENT_VALIDATION } from "../validations/registerClientValidation";
import { ClientType } from "../types/clientTypes";

export default function Modal({
  open,
  setOpen,
  onRegister,
}: {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  onRegister: (data: Object) => void;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 mt-3 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='shadow relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                    <CheckIcon
                      className='h-6 w-6 text-green-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-base font-semibold leading-6 text-gray-900'>
                      Register Client
                    </Dialog.Title>
                    <div className='mt-2'>
                      <FormikContainer
                        handleSubmit={onRegister}
                        defaultValues={DEFAULT_VALUES}
                        defaultSchema={REGISTER_CLIENT_VALIDATION}>
                        <RegisterClientForm hideModal={() => setOpen(false)} />
                      </FormikContainer>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
