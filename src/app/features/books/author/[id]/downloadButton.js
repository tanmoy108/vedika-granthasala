'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const DownloadButton = ({url}) => {

  return (
      <Link href= {url} target='_blank'>
          <Button variant="own" size="lg" className="my-6">Download</Button>
      </Link>
  )
}

export default DownloadButton