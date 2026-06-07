import react from 'react';

export default function Card({ children, className = '' }) {
    return (
        <div className={`bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden p-4 ${className}`}>
            {children}
            </div>
    );
}