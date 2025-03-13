import React, { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
    return (
        <div className="font-semibold text-mine-7">{children}</div>
    );
}