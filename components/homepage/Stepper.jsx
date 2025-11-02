'use client'

export default function Stepper() {
  return (
    <div className=" p-4  bg-deve">
      <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
        

        <div className=" grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white h-[50px] w-[50px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                <path d="M10 10l2 -2v8" />
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition">Initial Discussion</h5>
                <p className="text-gray-300">
                  We will have discussions on the requirements to ensure your MVP (Minimum Viable
                  Product) is ready for the initial launch
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white h-[50px] w-[50px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Deal Finalized
                </h5>
                <p className="text-gray-300">
                  Once we agree on what to build, We will start working on it right away.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white h-[50px] w-[50px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1" />
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Product Delivery
                </h5>
                <p className="text-gray-300">
                  We will develop your product MVP in 15 days (more time required depending on the
                  complexity of the project)
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white h-[50px] w-[50px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                <path d="M10 8v3a1 1 0 0 0 1 1h3" />
                <path d="M14 8v8" />
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Celebrate your Launch
                </h5>
                <p className="text-gray-300">
                  We love Celebrations. We will celebrate your launch on our Social Profiles.
                </p>
              </div>
            </div>
          </div>
          {/* end cards */}
        </div>
      </div>
    </div>
  )
}
