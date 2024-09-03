import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function Modal({ open, handleOpen, title, children, size, onSave }) {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size={size}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{title}</DialogHeader>
        <DialogBody className="flex flex-row justify-center items-center overflow-y-scroll h-80">
          <div className="mt-20">{children}</div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
          {onSave && (
            <Button variant="gradient" color="green" onClick={onSave}>
              <span>Save</span>
            </Button>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
}
