import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Struck from "@/components/cashier/input-order/struck";

const PopUp = ({ data, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handlePrint = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Printed successfully");
    }, 2000);
  };

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="p-16 sm:max-w-lg">
        <DialogHeader className="border-none">
          <DialogTitle className="text-4xl text-center font-roboto-medium">
            Transaction Success
          </DialogTitle>
        </DialogHeader>

        <Struck data={data} />

        <Button disabled={loading} onClick={handlePrint}>
          {loading ? "Loading..." : "Print Struck"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
