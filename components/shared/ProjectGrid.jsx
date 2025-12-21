import React from "react";

const ProjectGrid = ({ children }) => {
    return (
        <div className="sm:h-auto h-auto sm:gap-0 gap-6 py-6 w-full flex flex-col sm:grid sm:grid-cols-2 border-t-[0.2px] border-black">
            {children}
        </div>
    );
};

export default ProjectGrid;
