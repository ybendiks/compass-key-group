import { Listing } from "@/data/listings";

export default function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Image Placeholder */}
      <div className="relative h-52 property-img-placeholder">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
        </div>
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded ${
              listing.status === "Sold"
                ? "bg-red-600 text-white"
                : listing.status === "Pending"
                ? "bg-amber-500 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {listing.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-baseline justify-between mb-1">
          <p className="text-xl font-bold text-navy">
            ${listing.price.toLocaleString()}
          </p>
          <span className="text-xs text-gray-400">{listing.type}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          {listing.address}, {listing.city}, {listing.state} {listing.zip}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-50 pt-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <strong>{listing.beds}</strong> bd
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h.01M12 7h.01M16 7h.01M3 11h18M5 19h14a2 2 0 002-2v-4H3v4a2 2 0 002 2z" />
            </svg>
            <strong>{listing.baths}</strong> ba
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <strong>{listing.sqft.toLocaleString()}</strong> sqft
          </span>
        </div>
      </div>
    </div>
  );
}
