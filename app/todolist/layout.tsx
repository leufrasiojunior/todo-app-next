import React from "react";

const TodoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center bg-zinc-950 min-h-screen ">
        {children}
      </div>
    </section>
  );
};

export default TodoLayout;
