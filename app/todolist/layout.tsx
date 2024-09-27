import React from "react";

const TodoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default TodoLayout;
