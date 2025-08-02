'use client';

import React from 'react';
import Link from 'next/link';

export default function ButtonDemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Button Component Demo
          </h1>
          <p className="text-slate-600">
            Showcasing our new rounded button styles with brand colors
          </p>
        </div>

        {/* Primary Buttons */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Primary Buttons (Navy)
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-primary btn-primary-sm">Small Radius</button>
              <button className="btn-primary btn-primary-md">Medium Radius</button>
              <button className="btn-primary btn-primary-lg">Large Radius</button>
              <button className="btn-primary btn-primary-xl">XL Radius</button>
              <button className="btn-primary btn-primary-full">Full Radius</button>
            </div>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Secondary Buttons (Light)
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-secondary btn-secondary-sm">
                <span className="btn-secondary-text">Small Radius</span>
              </button>
              <button className="btn-secondary btn-secondary-md">
                <span className="btn-secondary-text">Medium Radius</span>
              </button>
              <button className="btn-secondary btn-secondary-lg">
                <span className="btn-secondary-text">Large Radius</span>
              </button>
              <button className="btn-secondary btn-secondary-xl">
                <span className="btn-secondary-text">XL Radius</span>
              </button>
              <button className="btn-secondary btn-secondary-full">
                <span className="btn-secondary-text">Full Radius</span>
              </button>
            </div>
          </div>
        </div>

        {/* Luxury Buttons */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Luxury Buttons (Gold)
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-luxury btn-luxury-sm">Small Radius</button>
              <button className="btn-luxury btn-luxury-md">Medium Radius</button>
              <button className="btn-luxury btn-luxury-lg">Large Radius</button>
              <button className="btn-luxury btn-luxury-xl">XL Radius</button>
              <button className="btn-luxury btn-luxury-full">Full Radius</button>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Interactive Examples
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/" className="btn-primary">
                Go Home
              </Link>
              <Link href="/contact" className="btn-luxury">
                Book Appointment
              </Link>
              <Link href="/services" className="btn-secondary">
                <span className="btn-secondary-text">Learn More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="bg-slate-100 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Usage Instructions
          </h3>
          <div className="text-sm text-slate-600 space-y-2">
            <p><strong>Primary:</strong> Use <code className="bg-slate-200 px-2 py-1 rounded">btn-primary</code> for main actions</p>
            <p><strong>Secondary:</strong> Use <code className="bg-slate-200 px-2 py-1 rounded">btn-secondary</code> for secondary actions</p>
            <p><strong>Luxury:</strong> Use <code className="bg-slate-200 px-2 py-1 rounded">btn-luxury</code> for premium/CTA buttons</p>
            <p><strong>Variants:</strong> Add <code className="bg-slate-200 px-2 py-1 rounded">-sm, -md, -lg, -xl, -full</code> for different border radius</p>
          </div>
        </div>
      </div>
    </div>
  );
}