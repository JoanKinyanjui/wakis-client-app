import React from 'react'

function Loading() {
  return (
    <div className='w-full flex justify-center min-h-[50vh] items-center'>
    <div className="loader">
  <svg viewBox="0 0 80 80">
    <rect x="8" y="8" width="64" height="64"></rect>
    <text
      x="50%"
      y="60%"
      text-anchor="middle"
      fill="black"
      font-size="24"
      font-weight="bold"
    >
      W
    </text>
  </svg>
</div>

<div className="loader">
  <svg viewBox="0 0 80 80">
    <rect x="8" y="8" width="64" height="64"></rect>
    <text
      x="50%"
      y="60%"
      text-anchor="middle"
      fill="black"
      font-size="24"
      font-weight="bold"
    >
      A
    </text>
  </svg>
</div>

<div className="loader">
  <svg viewBox="0 0 80 80">
    <rect x="8" y="8" width="64" height="64"></rect>
    <text
      x="50%"
      y="60%"
      text-anchor="middle"
      fill="black"
      font-size="24"
      font-weight="bold"
    >
      K
    </text>
  </svg>
</div>

<div className="loader">
  <svg viewBox="0 0 80 80">
    <rect x="8" y="8" width="64" height="64"></rect>
    <text
      x="50%"
      y="60%"
      text-anchor="middle"
      fill="black"
      font-size="24"
      font-weight="bold"
    >
      I
    </text>
  </svg>
</div>
    </div>
  )
}

export default Loading;
