import React from "react";

const Item = ({ label, value }) => {
  return (
    <p className="text-xs font-roboto-light text-neutral-500">
      {label} <span className="text-black">{value}</span>
    </p>
  );
};

const Struck = ({ data }) => {
  return (
    <div className="w-full p-4 bg-neutral-200">
      <div className="flex flex-col gap-2">
        <Item label="No Order" value={data.order_number} />
        <Item label="Order Date" value={data.order_date} />
        <Item label="Customer Name" value={data.customer_name} />
        <p className="text-xs font-roboto-light">
          {data.order_type_name === "Take away"
            ? data.order_type_name
            : `${data.order_type_name} - No.Meja ${data.table_no}`}
        </p>
        <span className="w-full h-[0.5px] bg-neutral-300"></span>
      </div>
      {data.order_details.map((item) => (
        <div className="flex items-center justify-between pb-4 mt-4 border-b-2 border-dashed">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-roboto-medium">{item.menu_name}</p>
            <p className="text-xs font-roboto-light text-neutral-500">
              {item.amount} x Rp {item.price.toLocaleString("id-ID")}
            </p>
          </div>
          <p>Rp {item.price_total.toLocaleString("id-ID")}</p>
        </div>
      ))}
      <div className="relative flex flex-col w-full gap-2 py-4 border-b-2 border-dashed bg-neutral-200 border-neutral-500">
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize font-roboto-light text-neutral-400">
            sub total
          </p>
          <p className="text-sm font-roboto text-neutral-500">
            Rp. {data.sub_total.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize font-roboto-light text-neutral-400">
            tax
          </p>
          <p className="text-sm font-roboto text-neutral-500">
            Rp. {data.tax.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="absolute rounded-full top-[68px] -left-7 size-6 bg-neutral-100"></div>
        <div className="absolute rounded-full top-[68px] -right-7 size-6 bg-neutral-100"></div>
      </div>
      <div className="flex flex-col w-full gap-2 pt-4 bg-neutral-200">
        <div className="flex items-center justify-between">
          <p className="text-xl capitalize font-roboto text-neutral-900">
            total
          </p>
          <p className="text-2xl font-roboto-medium text-neutral-900">
            Rp. {data.total.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize font-roboto-light text-neutral-400">
            Diterima
          </p>
          <p className="text-sm font-roboto">
            Rp. {data.paid.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize font-roboto-light text-neutral-400">
            Kembalian
          </p>
          <p className="text-sm font-roboto">
            Rp. {data.changes.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Struck;
