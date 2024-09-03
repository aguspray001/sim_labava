import React from 'react'

export default function ProgressBar({value}) {
    const nilai = `w-[${value}%]`
  return (
    <div class="flex w-full h-4 overflow-hidden font-sans text-xs font-medium rounded-full flex-start bg-blue-gray-50">
        <div class={`flex items-center justify-center ${nilai} h-full overflow-hidden text-white break-all bg-gray-900 rounded-full`}>
            {value}%
        </div>
    </div>
  )
}
