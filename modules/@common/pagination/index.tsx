"use client";
import { Pagination } from "antd";

interface propTypes {
  onChange?: any;
  total?: any;
  limit?: any;
  page?: any;
}

const PaginationComponent = ({ onChange, total, limit, page }: propTypes) => {
  return (
    <div className="flex justify-end">
      <Pagination
        onChange={onChange}
        total={total}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={limit}
        defaultCurrent={page}
        showSizeChanger={false}
      />
    </div>
  );
};

export default PaginationComponent;
