export const ScrollToTopButton = ({ show, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-black text-white shadow-lg border border-gray-100 hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 focus:outline-none ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
        aria-label="Scroll to top"
    >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </button>
);